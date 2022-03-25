import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { getGraphqlSdk } from '.';
import { ControlGroup } from '../control-group';
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
    try {
      const { zappi, eddi } = await this.sdk.Device({
        serialNo,
      });
      return zappi || eddi;
    } catch (err) {
      throw new GraphQLError('Get Device query error');
    }
  }

  async getDeviceStatus(serialNo: number): Promise<DeviceStatus> {
    try {
      const { zappi, eddi } = await this.sdk.DeviceStatus({
        serialNo,
      });
      const { updateDate, ...device } = zappi || eddi;
      return { ...device, updateDate: new Date(updateDate) };
    } catch (err) {
      logger.error(err);
      throw new GraphQLError('Device status error');
    }
  }

  async getDeviceControlGroup(serialNo: number): Promise<ControlGroup | null> {
    try {
      const { zappi, eddi } = await this.sdk.DeviceControlGroup({ serialNo });
      return zappi?.controlGroupDevice?.controlGroup ?? eddi?.controlGroupDevice?.controlGroup ?? null;
    } catch (err) {
      logger.error(err);
      throw new GraphQLError('Device control group error');
    }
  }
}
