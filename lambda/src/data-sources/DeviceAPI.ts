import { RESTDataSource } from 'apollo-datasource-rest';
import { getGraphqlSdk } from '.';
import { ControlGroup } from '../control-group';
import { DeviceStatus } from '../device-status';
import { getSdk } from '../generated/graphql';
import { mapDeviceClassToDeviceType } from '../utils';
import { NotFoundError } from './NotFoundError';

export class DeviceAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getDeviceStatus(serialNo: number): Promise<DeviceStatus> {
    const { zappi, eddi } = await this.sdk.DeviceStatus({
      serialNo,
    });
    const device = zappi || eddi;
    if (!device) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found`);
    }
    const { updateDate, ...deviceProps } = device;

    return {
      ...deviceProps,
      deviceClass: mapDeviceClassToDeviceType(deviceProps.deviceClass),
      updateDate: new Date(updateDate),
    };
  }

  async getDeviceControlGroup(serialNo: number, adminGroupId: number): Promise<ControlGroup[]> {
    const { adminGroup } = await this.sdk.DeviceControlGroup({ serialNo, adminGroupId });
    const controlGroups = adminGroup.controlGroups
      .filter(({ devices }) => !!devices[0]?.controlGroup)
      .map(({ devices }) => devices[0].controlGroup);
    if (!controlGroups.length) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found in any of your control groups`);
    }
    return controlGroups;
  }
}
