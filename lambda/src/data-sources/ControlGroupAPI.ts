import { RESTDataSource } from 'apollo-datasource-rest/dist/RESTDataSource';
import { AppUser, getAggregatorCondition } from '../context';
import { ControlGroup } from '../control-group';
import { ControlGroupsArgs, MutateControlGroupArgs } from '../control-group/controlGroup.args';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import {
  Admin_Group_Device_Bool_Exp,
  Control_Group_Bool_Exp,
  Control_Group_Device_Bool_Exp,
  Control_Group_Device_Insert_Input,
  getSdk,
} from '../generated/graphql';
import { AffectedResponse, PaginationArgs } from '../shared';
import { mapEddiOrZappiStatusToDeviceStatus } from '../utils';
import { NotFoundError } from './CustomError';
import { getGraphqlSdk } from './getGraphqlSdk';

export class ControlGroupAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getControlGroups({ limit, offset }: PaginationArgs, user: AppUser): Promise<ControlGroup[]> {
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
    });
    const where = getAggregatorCondition(user, condition);
    const { controlGroups } = await this.sdk.ControlGroups({ limit, offset, where });
    return controlGroups;
  }

  async createControlGroup(name: string, adminGroupId: number, user: AppUser): Promise<ControlGroup> {
    const object = {
      name,
      admin_group_id: adminGroupId,
    };
    const { controlGroup } = await this.sdk.CreateControlGroup({ object });
    return controlGroup;
  }

  async getControlGroupById(id: number, user: AppUser): Promise<ControlGroup> {
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      id: { _eq: id },
    });
    const adminCondition = (): Control_Group_Bool_Exp => ({
      id: { _eq: id },
    });
    const where = getAggregatorCondition(user, condition, adminCondition);
    const {
      controlGroups: [controlGroup],
    } = await this.sdk.ControlGroups({ where });
    if (!controlGroup) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return controlGroup;
  }

  async addDevice(args: MutateControlGroupArgs, user: AppUser): Promise<AffectedResponse> {
    const { id, serialNos } = args;
    const condition = (aggregatorId: string): Admin_Group_Device_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      serialno: { _in: serialNos },
    });
    const where = getAggregatorCondition(user, condition);
    const { devices } = await this.sdk.AdminGroupDevices({ where });

    if (!devices.length) {
      throw new NotFoundError(`Device with serial number ${serialNos} not found`);
    }

    const controlGroup = await this.getControlGroupById(id, user);

    if (!controlGroup) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }

    const objects: Control_Group_Device_Insert_Input[] = devices.map(({ serialNo: serialno, deviceClass }) => ({
      control_group_id: id,
      admin_group_id: controlGroup.adminGroupId,
      serialno,
      device_type: deviceClass,
    }));

    const { response } = await this.sdk.AddDevice({ objects });

    return {
      affectedRows: response?.affectedRows ?? 0,
    };
  }

  async removeDeviceFromControlGroup(args: MutateControlGroupArgs, user: AppUser): Promise<AffectedResponse> {
    const { id, serialNos } = args;
    const condition = (aggregatorId: string): Control_Group_Device_Bool_Exp => ({
      control_group: {
        admin_group: { aggregator_id: { _eq: aggregatorId } },
        id: { _eq: id },
      },
      serialno: { _in: serialNos },
    });
    const where = getAggregatorCondition(user, condition);

    const {
      response: { affectedRows = 0 },
    } = await this.sdk.RemoveDeviceFromControlGroup({ where });

    if (!affectedRows) {
      throw new NotFoundError(`Given devices were not found in control group ${id}`);
    }

    return {
      affectedRows,
    };
  }

  async getControlGroupDevices(id: number, user: AppUser): Promise<Device[]> {
    const where = getAggregatorCondition(user, (aggregatorId) => {
      const exp: Control_Group_Device_Bool_Exp = {
        control_group: {
          admin_group: { aggregator_id: { _eq: aggregatorId } },
          id: { _eq: id },
        },
      };
      return exp;
    });
    const { devices } = await this.sdk.ControlGroupDevices({ where });
    if (!devices.length) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return devices;
  }

  async getControlGroupStatus(args: ControlGroupsArgs, user: AppUser): Promise<DeviceStatus[]> {
    const { id, limit, offset } = args;
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      id: { _eq: id },
    });
    const where = getAggregatorCondition(user, condition);
    const {
      controlGroups: [controlGroup],
    } = await this.sdk.ControlGroupStatus({ where, limit, offset });
    if (!controlGroup) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return mapEddiOrZappiStatusToDeviceStatus(controlGroup.devices);
  }
}
