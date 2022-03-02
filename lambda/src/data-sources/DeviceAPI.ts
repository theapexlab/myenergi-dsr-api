import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';
import { DeviceStatus } from '../device-status';
import { DevicesArgs, Device } from '../device';

export class DeviceAPI extends RESTDataSource {
  client: GraphQLClient;
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.client = new GraphQLClient(this.baseURL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': secret,
      },
    });
    this.sdk = getSdk(this.client);
  }

  async getDevices({ limit, offset }: DevicesArgs): Promise<Device[]> {
    // todo: currently limit is applied per device type

    const { zappis, eddis } = await this.sdk.Devices({
      limit,
      offset,
    });
    return [...zappis, ...eddis];
  }

  async getDevice(id: string): Promise<Device> {
    const { zappi, eddi } = await this.sdk.Device({
      id,
    });
    return zappi || eddi;
  }
  async getDeviceStatus(id: number): Promise<DeviceStatus> {
    const { zappi, eddi } = await this.sdk.Device({
      id,
    });
    return zappi || eddi;
  }
}
