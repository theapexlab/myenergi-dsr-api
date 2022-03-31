import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { getGraphqlSdk } from '.';
import { DeviceHistory } from '../device-history';
import { DeviceHistoryArgs } from '../device-history/deviceHistory.args';
import { getSdk } from '../generated/graphql';
import { HistoryByIdsArgs } from '../shared';
import { mapHistoryFragmentToDeviceHistory } from '../utils';

export class HistoryAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getDeviceHistory(args: DeviceHistoryArgs): Promise<DeviceHistory[]> {
    const { serialNo, startDate, endDate, offset, limit } = args;
    try {
      const { eddiMinutes, zappiMinutes } = await this.sdk.DeviceHistory({
        serialNo,
        offset,
        limit,
        timestampGte: startDate,
        timestampLte: endDate,
      });
      return [...eddiMinutes, ...zappiMinutes].map(mapHistoryFragmentToDeviceHistory);
    } catch (error) {
      throw new GraphQLError(JSON.stringify(error));
    }
  }

  async getHistoryByIds(args: HistoryByIdsArgs, serialNos: number[]): Promise<DeviceHistory[]> {
    const { startDate, endDate, offset, limit } = args;
    try {
      const input = {
        serialNos,
        gte: startDate,
        lt: endDate,
        limit,
        offset,
      };
      const { zappiMinutes, eddiMinutes } = await this.sdk.DeviceHistoryByIds(input);
      return [...eddiMinutes, ...zappiMinutes].map(mapHistoryFragmentToDeviceHistory);
    } catch (err) {
      throw new GraphQLError('Admin group history query failed');
    }
  }
}
