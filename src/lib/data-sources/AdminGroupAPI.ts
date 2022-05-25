import { GraphQLError } from 'graphql';
import { AdminGroup, AdminGroupsArgs, MutateAdminGroupArgs } from '../models/admin-group';
import { Admin_Group_Bool_Exp, Device_Type_Enum } from '../generated/graphql';
import { AffectedResponse } from '../models/shared';
import { getAggregatorCondition } from '../utils/getAggregatorCondition';
import { NotFoundError } from './CustomError';
import { GraphqlDataSource } from './GraphqlDataSource';
import { DeviceHubDetails } from '../models/hub';

export class AdminGroupAPI extends GraphqlDataSource {
  constructor(baseURL: string, secret: string) {
    super(baseURL, secret);
  }

  async getAll(args?: AdminGroupsArgs): Promise<AdminGroup[]> {
    const { user } = this.context;
    const { offset, limit } = args ?? {};
    const where = getAggregatorCondition<Admin_Group_Bool_Exp>(user, (aggregatorId) => ({
      aggregator_id: { _eq: aggregatorId },
    }));
    const { adminGroups } = await this.sdk.AdminGroups({ offset, limit, where });
    return adminGroups;
  }

  async getById(id: number): Promise<AdminGroup> {
    const { user } = this.context;
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
