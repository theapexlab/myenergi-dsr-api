import { AdminControlGroup, ControlGroup } from '../models/control-group';
import { MutateControlGroupArgs } from '../models/control-group/controlGroup.args';
import {
  Admin_Group_Device_Bool_Exp,
  Control_Group_Bool_Exp,
  Control_Group_Device_Bool_Exp,
  Control_Group_Device_Insert_Input,
} from '../generated/graphql';
import { AffectedResponse, PaginationArgs } from '../models/shared';
import { getAggregatorCondition } from '../utils/getAggregatorCondition';
import { NotFoundError } from './CustomError';
import { GraphqlDataSource } from './GraphqlDataSource';
import { AdminGroupControlGroupsArgs } from '../models/admin-group';

export class ControlGroupAPI extends GraphqlDataSource {
  constructor(baseURL: string, secret: string) {
    super(baseURL, secret);
  }

  async getControlGroups({ limit, offset }: PaginationArgs): Promise<ControlGroup[]> {
    const { user } = this.context;
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
    });
    const where = getAggregatorCondition(user, condition);
    const { controlGroups } = await this.sdk.ControlGroups({ limit, offset, where });
    return controlGroups;
  }

  async createControlGroup(name: string, adminGroupId: number): Promise<ControlGroup> {
    const object = {
      name,
      admin_group_id: adminGroupId,
    };
    const { controlGroup } = await this.sdk.CreateControlGroup({ object });
    return controlGroup;
  }

  async getControlGroupsByAdminGroupId({
    id,
    limit,
    offset,
  }: AdminGroupControlGroupsArgs): Promise<AdminControlGroup[]> {
    const { user } = this.context;
    const where = getAggregatorCondition<Control_Group_Bool_Exp>(
      user,
      () => null,
      () => ({
        admin_group_id: { _eq: id },
      })
    );
    const { controlGroups } = await this.sdk.AdminGroupControlGroups({ offset, limit, where });
    return controlGroups;
  }

  async getControlGroupById(id: number): Promise<ControlGroup> {
    const { user } = this.context;
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

  async addDevice(args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { user } = this.context;
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

    const controlGroup = await this.getControlGroupById(id);

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

  async removeDeviceFromControlGroup(args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { user } = this.context;
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

  async getDeviceControlGroup(serialNo: number): Promise<ControlGroup[]> {
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      devices: { serialno: { _eq: serialNo } },
    });
    const where = getAggregatorCondition(this.context.user, condition);
    const { controlGroups } = await this.sdk.DeviceControlGroup({ where });

    if (!controlGroups.length) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found in any of your control groups`);
    }
    return controlGroups;
  }
}
