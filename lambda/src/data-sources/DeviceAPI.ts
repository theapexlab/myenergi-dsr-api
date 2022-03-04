import { RESTDataSource } from 'apollo-datasource-rest';
import { getGraphqlSdk } from '.';
import { Device, DevicesArgs } from '../device';
import { DeviceStatus } from '../device-status';
import { getSdk } from '../generated/graphql';
import { logger } from '../utils/logger';

export class DeviceAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  // todo: currently limit is applied per device type
  async getDevices({ limit, offset }: DevicesArgs): Promise<Device[]> {
    try {
      const { zappis, eddis } = await this.sdk.Devices({
        limit,
        offset,
      });
      return [...zappis, ...eddis];
    } catch (err) {
      logger.error(err);
      return [];
    }
  }

  async getDevice(serialNo: number): Promise<Device> {
    const { zappi, eddi } = await this.sdk.Device({
      serialNo,
    });
    return zappi || eddi;
  }
  async getDeviceStatus(serialNo: number): Promise<DeviceStatus> {
    const { zappi, eddi } = await this.sdk.DeviceStatus({
      serialNo,
    });
    const { updateDate, ...device } = zappi || eddi;
    return { ...device, updateDate: new Date(updateDate) };
  }
}
