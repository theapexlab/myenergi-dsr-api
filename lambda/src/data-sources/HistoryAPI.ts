import { RESTDataSource } from 'apollo-datasource-rest';
import { GraphQLError } from 'graphql';
import { getGraphqlSdk } from '.';
import { DeviceHistory } from '../device-history';
import { DeviceHistoryArgs } from '../device-history/deviceHistory.args';
import { getSdk } from '../generated/graphql';
import { mapHistoryFragmentToDeviceHistory } from '../utils/maps';

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
}
