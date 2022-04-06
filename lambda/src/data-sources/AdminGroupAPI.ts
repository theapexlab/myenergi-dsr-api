import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { AdminGroup, AdminGroupsArgs, MutateAdminGroupArgs } from '../admin-group';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { Device_Type_Enum, getSdk } from '../generated/graphql';
import { AffectedResponse } from '../shared';
import { mapDeviceClassToDeviceType } from '../utils';
import { logger } from '../utils/logger';
import { getGraphqlSdk } from './getGraphqlSdk';
import { NotFoundError } from './NotFoundError';

export class AdminGroupAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getAll(args: AdminGroupsArgs): Promise<AdminGroup[]> {
    const { limit, offset } = args;
    const { adminGroups } = await this.sdk.AdminGroups({ limit, offset });
    if (!adminGroups.length) {
      throw new NotFoundError(`No admin groups found`);
    }
    return adminGroups;
  }

  async getById(id: number): Promise<AdminGroup> {
    const { adminGroup } = await this.sdk.AdminGroup({ id });
    if (!adminGroup) {
      throw new NotFoundError(`Admin group with id ${id} not found`);
    }
    return adminGroup;
  }

  async getDevices(id: number): Promise<Device[]> {
    const { adminGroup } = await this.sdk.AdminGroupDevices({ adminGroupId: id });
    if (!adminGroup) {
      throw new NotFoundError(`Admin group with id ${id} not found`);
    }
    return adminGroup.devices || [];
  }

  async getStatus(id: number): Promise<DeviceStatus[]> {
    const { adminGroup } = await this.sdk.AdminGroupStatus({ adminGroupId: id });
    if (!adminGroup) {
      throw new NotFoundError(`Admin group with id ${id} not found`);
    }
    return adminGroup.adminGroupStatus
      .flatMap(({ zappi, eddi }) => [zappi, eddi])
      .filter((item) => !!item)
      .map(({ updateDate, ...deviceStatus }) => ({
        ...deviceStatus,
        deviceClass: mapDeviceClassToDeviceType(deviceStatus.deviceClass),
        updateDate: new Date(updateDate),
      }));
  }

  async create(name: string): Promise<AdminGroup> {
    try {
      const { adminGroup } = await this.sdk.CreateAdminGroup({ name });
      return adminGroup;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Admin group creation failed');
    }
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
