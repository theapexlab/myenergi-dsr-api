import {
  CognitoIdentityProviderClient,
  CreateUserPoolClientCommand,
  DeleteUserPoolClientCommand,
  ListUserPoolClientsCommand,
  UserPoolClientDescription,
} from '@aws-sdk/client-cognito-identity-provider';
import { RESTDataSource } from 'apollo-datasource-rest';
import { AppClient } from '../app-client';
import { AppClientDetails, AppClientId } from '../app-client/appClient.type';

export class AppClientAPI extends RESTDataSource {
  client: CognitoIdentityProviderClient;
  constructor(private userPoolId: string, private region: string) {
    super();
    this.client = new CognitoIdentityProviderClient({ region: this.region });
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
      AllowedOAuthScopes: ['https://dsr-api-demo.com/api.readwrite'], // todo: set correct scopes
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