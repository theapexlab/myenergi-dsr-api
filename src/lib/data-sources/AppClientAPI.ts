import {
  CognitoIdentityProviderClient,
  CreateUserPoolClientCommand,
  DeleteUserPoolClientCommand,
  ListUserPoolClientsCommand,
  UserPoolClientDescription,
} from '@aws-sdk/client-cognito-identity-provider';
import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { AppClient } from '../models/app-client';
import { AppClientDetails, AppClientId } from '../models/app-client/appClient.type';
import { AppContext } from '../auth/auth.type';
import { auth } from '../config';

export class AppClientAPI extends DataSource<AppContext> {
  context!: AppContext;
  client: CognitoIdentityProviderClient;

  constructor(private userPoolId: string, private region: string) {
    super();
    this.client = new CognitoIdentityProviderClient({ region: this.region });
  }

  initialize(config: DataSourceConfig<AppContext>): void {
    this.context = config.context;
  }

  private static mapAppClient(client: UserPoolClientDescription): AppClient {
    return {
      clientId: client.ClientId ?? null,
      clientName: client.ClientName ?? null,
    };
  }

  async list(): Promise<AppClient[]> {
    const command = new ListUserPoolClientsCommand({
      UserPoolId: this.userPoolId,
    });
    const { UserPoolClients } = await this.client.send(command);

    return UserPoolClients.map(AppClientAPI.mapAppClient);
  }

  async create(name: string): Promise<AppClientDetails> {
    const command = new CreateUserPoolClientCommand({
      UserPoolId: this.userPoolId,
      ClientName: name,
      GenerateSecret: true,
      AllowedOAuthFlowsUserPoolClient: true,
      AllowedOAuthFlows: ['client_credentials'],
      AllowedOAuthScopes: [auth.scope],
    });
    const { UserPoolClient } = await this.client.send(command);
    return {
      ...AppClientAPI.mapAppClient(UserPoolClient),
      clientSecret: UserPoolClient.ClientSecret,
    };
  }

  async remove(clientId: string): Promise<AppClientId> {
    const command = new DeleteUserPoolClientCommand({
      UserPoolId: this.userPoolId,
      ClientId: clientId,
    });
    await this.client.send(command);
    return { clientId };
  }
}
