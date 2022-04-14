import { DeviceHistory } from '../device-history';
import { HistoryByIdsArgs } from '../shared';
import { mapHistoryFragmentToDeviceHistory } from '../utils';
import { NotFoundError } from './CustomError';
import { GraphqlDataSource } from './GraphqlDataSource';

export class HistoryAPI extends GraphqlDataSource {
  constructor(baseURL: string, secret: string) {
    super(baseURL, secret);
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
