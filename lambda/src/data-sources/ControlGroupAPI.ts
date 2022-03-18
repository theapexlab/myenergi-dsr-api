import { RESTDataSource } from 'apollo-datasource-rest/dist/RESTDataSource';
import { ControlGroup } from '../control-group';
import { getSdk } from '../generated/graphql';
import { logger } from '../utils/logger';
import { getGraphqlSdk } from './getGraphqlSdk';
import { GraphQLError } from 'graphql';
import { MutateControlGroupArgs, ControlGroupsArgs } from '../control-group/controlGroup.args';
import { AffectedResponse } from '../shared';
import { Device } from '../device';

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
      /*const { zappi, eddi } = await this.sdk.Device({ serialNo });

      if (!zappi && !eddi) {
        throw new Error(`Not found device (serialNo: ${serialNo})`);
      }*/
      const objects = serialNos.map((serialno) => ({ control_group_id, serialno }));
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
      const { controlGroupDevices } = await this.sdk.ControlGroupDevices({ controlGroupId: id });
      return controlGroupDevices.flatMap(({ zappi, eddi }) => [zappi, eddi]).filter((item) => !!item);
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Control group query failed');
    }
  }
}
