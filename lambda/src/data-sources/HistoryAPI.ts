import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { getGraphqlSdk } from '.';
import { DeviceHistory } from '../device-history';
import { DeviceHistoryArgs } from '../device-history/deviceHistory.args';
import { getSdk } from '../generated/graphql';
import { HistoryByIdsArgs } from '../shared';
import { logger } from '../utils/logger';
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
        timestampGte: startDate.toISOString(),
        timestampLte: endDate.toISOString(),
      });
      return [...eddiMinutes, ...zappiMinutes].map(mapHistoryFragmentToDeviceHistory);
    } catch (error) {
      throw new GraphQLError(JSON.stringify(error));
    }
  }

  async getHistoryByIds(args: HistoryByIdsArgs, serialNos: number[]): Promise<DeviceHistory[]> {
    const { startDate, endDate, offset, limit } = args;
    console.log({ startDate, gte: startDate.toISOString() });
    try {
      const input = {
        serialNos,
        gte: startDate.toISOString(),
        lt: endDate.toISOString(),
        limit,
        offset,
      };
      const { zappiMinutes, eddiMinutes } = await this.sdk.DeviceHistoryByIds(input);
      return [...eddiMinutes, ...zappiMinutes].map(mapHistoryFragmentToDeviceHistory);
    } catch (err) {
      logger.error(err.toString());
      throw new GraphQLError('Admin group history query failed');
    }
  }
}
