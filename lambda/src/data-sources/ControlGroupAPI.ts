import { RESTDataSource } from 'apollo-datasource-rest/dist/RESTDataSource';
import { GraphQLError } from 'graphql';
import { ControlGroup } from '../control-group';
import { ControlGroupsArgs, MutateControlGroupArgs } from '../control-group/controlGroup.args';
import { Device } from '../device';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { getSdk } from '../generated/graphql';
import { AffectedResponse } from '../shared';
import { logger } from '../utils/logger';
import { mapHistoryFragmentToDeviceHistory } from '../utils/maps';
import { getGraphqlSdk } from './getGraphqlSdk';

export class ControlGroupAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getControlGroups({ limit, offset }: ControlGroupsArgs): Promise<ControlGroup[]> {
    try {
      const { controlGroups } = await this.sdk.ControlGroups({ limit, offset });
      return controlGroups;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control groups query failed');
    }
  }

  async createControlGroup(name: string): Promise<ControlGroup> {
    try {
      const { controlGroup } = await this.sdk.CreateControlGroup({ name });
      return controlGroup;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group creation failed');
    }
  }

  async getControlGroupById(id: number): Promise<ControlGroup> {
    try {
      const { controlGroup } = await this.sdk.ControlGroup({ id });
      return controlGroup;
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group query failed');
    }
  }

  async addDevice(args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { id: control_group_id, serialNos } = args;
    try {
      const { zappis, eddis } = await this.sdk.DevicesBySerialNos({ serialNos });
      const devices = [...zappis, ...eddis];

      if (!devices.length) {
        throw new Error(`No devices was found`);
      }

      const objects = devices.map(({ serialNo }) => ({ control_group_id, serialno: serialNo }));
      const { response } = await this.sdk.AddDevice({ objects });
      return {
        affectedRows: response?.affectedRows ?? 0,
      };
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Cannot assign device to group');
    }
  }

  async removeDevice(args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { id: controlGroupId, serialNos } = args;
    try {
      const { response } = await this.sdk.RemoveDevice({ controlGroupId, serialNos });
      return {
        affectedRows: response?.affectedRows ?? 0,
      };
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Cannot remove device from group');
    }
  }

  async getControlGroupDevices(id: number): Promise<Device[]> {
    try {
      const {
        controlGroupDevices: { devices },
      } = await this.sdk.ControlGroupDevices({ controlGroupId: id });
      return devices.flatMap(({ zappi, eddi }) => [zappi, eddi]).filter((item) => !!item);
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group query failed');
    }
  }

  async getControlGroupStatus(id: number): Promise<DeviceStatus[]> {
    try {
      const { controlGroupHistory } = await this.sdk.ControlGroupStatus({ controlGroupId: id });
      return controlGroupHistory.devices
        .flatMap(({ zappi, eddi }) => [zappi, eddi])
        .filter((item) => !!item)
        .map(({ updateDate, ...device }) => ({
          updateDate: new Date(updateDate),
          ...device,
        }));
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group query failed');
    }
  }

  async getControlGroupHistory(id: number): Promise<DeviceHistory[]> {
    try {
      const { controlGroupHistory } = await this.sdk.ControlGroupHistory({ controlGroupId: id });
      if (!controlGroupHistory.devices.length) {
        throw new GraphQLError('Not found!');
      }
      return controlGroupHistory.devices
        .flatMap(({ zappiMinutes, eddiMinutes }) => [zappiMinutes, eddiMinutes])
        .filter((item) => !!item)
        .map(mapHistoryFragmentToDeviceHistory);
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group query failed');
    }
  }
}
