import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { AdminGroup, AdminGroupsArgs, MutateAdminGroupArgs } from '../admin-group';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { Device_Type_Enum, getSdk } from '../generated/graphql';
import { AffectedResponse } from '../shared';
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
    try {
      const { adminGroups } = await this.sdk.AdminGroups({ limit, offset });
      return adminGroups;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Admin groups query failed');
    }
  }

  async getById(id: number): Promise<AdminGroup> {
    try {
      const { adminGroup } = await this.sdk.AdminGroup({ id });
      if (!adminGroup) {
        throw new NotFoundError();
      }
      return adminGroup;
    } catch (err) {
      logger.error(err.toString());
      if (err instanceof NotFoundError) {
        throw new GraphQLError('Admin group not found!');
      }
      throw new GraphQLError('Admin group query failed');
    }
  }

  async getDevices(id: number): Promise<Device[]> {
    try {
      const { adminGroupDevices } = await this.sdk.AdminGroupDevices({ adminGroupId: id });
      return adminGroupDevices;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Admin group devices query failed');
    }
  }

  async getStatus(id: number): Promise<DeviceStatus[]> {
    try {
      const { adminGroupStatus } = await this.sdk.AdminGroupStatus({ adminGroupId: id });
      return adminGroupStatus
        .flatMap(({ zappi, eddi }) => [zappi, eddi])
        .filter((item) => !!item)
        .map(({ updateDate, ...rest }) => ({
          ...rest,
          updateDate: new Date(updateDate),
        }));
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Admin group status query failed');
    }
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
    try {
      const { zappis, eddis } = await this.sdk.DevicesBySerialNos({ serialNos });
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
        throw new Error(`No devices was found`);
      }

      const { response } = await this.sdk.AddDeviceToAdminGroup({ objects });
      return {
        affectedRows: response?.affectedRows ?? 0,
      };
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Cannot assign device to group');
    }
  }

  async removeDevices(args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { id: adminGroupId, serialNos } = args;
    try {
      const { response } = await this.sdk.RemoveDeviceFromAdminGroup({ adminGroupId, serialNos });
      return {
        affectedRows: response?.affectedRows ?? 0,
      };
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Cannot remove device from group');
    }
  }
}
