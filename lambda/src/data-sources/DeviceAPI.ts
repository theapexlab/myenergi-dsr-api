import { RESTDataSource } from 'apollo-datasource-rest';
import { getGraphqlSdk } from '.';
import { AppUser, getAggregatorCondition } from '../context';
import { ControlGroup } from '../control-group';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { Admin_Group_Device_Bool_Exp, Control_Group_Bool_Exp, getSdk } from '../generated/graphql';
import { PaginationArgs } from '../shared';
import { mapDeviceClassToDeviceType } from '../utils';
import { NotFoundError } from './CustomError';

export class DeviceAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getDevices(args: PaginationArgs, user: AppUser): Promise<Device[]> {
    const { offset, limit } = args;
    const where = getAggregatorCondition<Admin_Group_Device_Bool_Exp>(user, (aggregatorId) => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
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

  async getDeviceStatus(serialNo: number, user: AppUser): Promise<DeviceStatus> {
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

  async getDeviceControlGroup(serialNo: number, user: AppUser): Promise<ControlGroup[]> {
    const condition = (aggregatorId: string): Control_Group_Bool_Exp => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      devices: { serialno: { _eq: serialNo } },
    });
    const where = getAggregatorCondition(user, condition);
    const { controlGroups } = await this.sdk.DeviceControlGroup({ where });

    if (!controlGroups.length) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found in any of your control groups`);
    }
    return controlGroups;
  }
}
