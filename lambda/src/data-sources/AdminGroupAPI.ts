import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { AdminGroup, AdminGroupDevicesArgs, AdminGroupsArgs, MutateAdminGroupArgs } from '../admin-group';
import { AppUser, getAggregatorCondition } from '../context';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { Admin_Group_Bool_Exp, Admin_Group_Device_Bool_Exp, Device_Type_Enum, getSdk } from '../generated/graphql';
import { AffectedResponse } from '../shared';
import { mapEddiOrZappiStatusToDeviceStatus } from '../utils';
import { NotFoundError } from './CustomError';
import { getGraphqlSdk } from './getGraphqlSdk';

export class AdminGroupAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getAll(args: AdminGroupsArgs, user: AppUser): Promise<AdminGroup[]> {
    const { offset, limit } = args;
    const where = getAggregatorCondition<Admin_Group_Bool_Exp>(user, (aggregatorId) => ({
      aggregator_id: { _eq: aggregatorId },
    }));
    const { adminGroups } = await this.sdk.AdminGroups({ offset, limit, where });
    if (!adminGroups.length) {
      throw new NotFoundError(`No admin groups found`);
    }
    return adminGroups;
  }

  async getById(id: number, user: AppUser): Promise<AdminGroup> {
    const where = getAggregatorCondition<Admin_Group_Bool_Exp>(user, (aggregatorId) => ({
      aggregator_id: { _eq: aggregatorId },
      id: { _eq: id },
    }));
    const {
      adminGroups: [adminGroup],
    } = await this.sdk.AdminGroups({ where });
    if (!adminGroup) {
      throw new NotFoundError(`Admin group with id ${id} not found`);
    }
    return adminGroup;
  }

  async getDevice(serialNo: number, user: AppUser): Promise<Device> {
    const where = getAggregatorCondition<Admin_Group_Device_Bool_Exp>(user, (aggregatorId) => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      serialno: { _eq: serialNo },
    }));
    const {
      devices: [device],
    } = await this.sdk.AdminGroupDevices({ where });
    if (!device) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found`);
    }
    return device;
  }

  async getDevices(args: AdminGroupDevicesArgs, user: AppUser): Promise<Device[]> {
    const { id, offset, limit } = args;
    const where = getAggregatorCondition<Admin_Group_Device_Bool_Exp>(user, (aggregatorId) => ({
      admin_group: { aggregator_id: { _eq: aggregatorId }, id: { _eq: id } },
    }));
    const { devices } = await this.sdk.AdminGroupDevices({
      offset,
      limit,
      where,
    });

    if (!devices.length) {
      throw new NotFoundError(`No devices found`);
    }
    return devices;
  }

  async getStatus(id: number, user: AppUser): Promise<DeviceStatus[]> {
    const condition = (aggregatorId: string): Admin_Group_Bool_Exp => ({
      aggregator_id: { _eq: aggregatorId },
      id: { _eq: id },
    });
    const where = getAggregatorCondition(user, condition);
    const {
      adminGroups: [adminGroup],
    } = await this.sdk.AdminGroupStatus({ where });
    if (!adminGroup) {
      throw new NotFoundError(`Admin group with id ${id} not found`);
    }
    return mapEddiOrZappiStatusToDeviceStatus(adminGroup.devices);
  }

  async create(name: string, aggregatorId: string): Promise<AdminGroup> {
    const { adminGroup } = await this.sdk.CreateAdminGroup({ name, aggregatorId });
    return adminGroup;
  }

  async removeByAggregatorId(aggregatorId: string): Promise<AdminGroup[]> {
    const { adminGroup } = await this.sdk.RemoveAdminGroupByAggregatorId({ aggregatorId });
    return adminGroup.returning;
  }

  async addDevices(args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { id: admin_group_id, serialNos } = args;
    const { zappis, eddis } = await this.sdk.NewDevicesBySerialNos({ serialNos });
    const zappiObjects = zappis.map(({ serialNo: serialno }) => ({
      admin_group_id,
      serialno,
      device_type: Device_Type_Enum.Zappi,
    }));
    const eddiObjects = eddis.map(({ serialNo: serialno }) => ({
      admin_group_id,
      serialno,
      device_type: Device_Type_Enum.Eddi,
    }));
    const objects = [...zappiObjects, ...eddiObjects];

    if (!objects.length) {
      throw new NotFoundError(`No devices was found`);
    }

    const {
      response: { affectedRows = 0 },
    } = await this.sdk.AddDeviceToAdminGroup({ objects });

    if (!affectedRows) {
      throw new GraphQLError(`No devices were added to admin group ${admin_group_id}`);
    }

    return {
      affectedRows,
    };
  }

  async removeDevices(args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { id: admin_group_id, serialNos } = args;

    const {
      response: { affectedRows = 0 },
    } = await this.sdk.RemoveDeviceFromAdminGroup({ adminGroupId: admin_group_id, serialNos });

    if (!affectedRows) {
      throw new NotFoundError(`Given devices were not found in admin group ${admin_group_id}`);
    }

    return {
      affectedRows,
    };
  }
}
