import { RESTDataSource } from 'apollo-datasource-rest';
import { getGraphqlSdk } from '.';
import { DeviceHistory } from '../device-history';
import { getSdk } from '../generated/graphql';
import { HistoryByIdsArgs } from '../shared';
import { mapHistoryFragmentToDeviceHistory } from '../utils';
import { NotFoundError } from './CustomError';

export class HistoryAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getHistoryByIds(args: HistoryByIdsArgs, serialNos: number[]): Promise<DeviceHistory[]> {
    const { startDate, endDate, offset, limit } = args;
    const input = {
      serialNos,
      gte: startDate,
      lt: endDate,
      limit,
      offset,
    };
    const { zappiMinutes, eddiMinutes } = await this.sdk.DeviceHistoryByIds(input);

    const deviceHistories = [...eddiMinutes, ...zappiMinutes].map(mapHistoryFragmentToDeviceHistory);

    if (!deviceHistories.length) {
      throw new NotFoundError(`No history found for serial numbers ${serialNos}`);
    }

    return deviceHistories;
  }
}
