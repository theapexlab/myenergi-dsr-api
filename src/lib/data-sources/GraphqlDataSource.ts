import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { AppContext } from '../auth/auth.type';
import { getSdk } from '../generated/graphql';
import { getGraphqlSdk } from './getGraphqlSdk';

export class GraphqlDataSource extends DataSource<AppContext> {
  context!: AppContext;
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  initialize(config: DataSourceConfig<AppContext>): void {
    this.context = config.context;
  }
}
