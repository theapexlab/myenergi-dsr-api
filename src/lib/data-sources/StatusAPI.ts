import { ControlGroupsArgs } from '../models/control-group/controlGroup.args';
import { DeviceStatus } from '../models/device-status';
import { Admin_Group_Bool_Exp, Admin_Group_Device_Bool_Exp, Control_Group_Bool_Exp } from '../generated/graphql';
import { mapDeviceClassToDeviceType, mapEddiOrZappiStatusToDeviceStatus } from '../utils';
import { getAggregatorCondition } from '../utils/getAggregatorCondition';
import { NotFoundError } from './CustomError';
import { GraphqlDataSource } from './GraphqlDataSource';

export class StatusAPI extends GraphqlDataSource {
  constructor(baseURL: string, secret: string) {
    super(baseURL, secret);
  }

  async getDeviceStatus(serialNo: number): Promise<DeviceStatus> {
    const { user } = this.context;
    const condition = (aggregatorId): Admin_Group_Device_Bool_Exp => ({
      serialno: { _eq: serialNo },
      admin_group: { aggregator_id: { _eq: aggregatorId } },
    });
    const where = getAggregatorCondition(user, condition);
    const {
      devices: [device],
    } = await this.sdk.DeviceStatus({
      where,
    });
    if (!device) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found`);
    }
    const { updateDate, ...deviceProps } = device.zappi || device.eddi;

    return {
      ...deviceProps,
      deviceClass: mapDeviceClassToDeviceType(deviceProps.deviceClass),
      updateDate: new Date(updateDate),
    };
  }

  async getControlGroupStatus(args: ControlGroupsArgs): Promise<DeviceStatus[]> {
    const { user } = this.context;
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

  async getAdminGroupStatus(id: number): Promise<DeviceStatus[]> {
    const { user } = this.context;
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
}
