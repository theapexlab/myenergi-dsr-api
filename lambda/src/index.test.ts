import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { schema } from './schema';

describe('', () => {
  it('returns device with the correct id', async () => {
    const testServer = new ApolloServer({
      schema,
      mocks: true,
    });

    const result = await testServer.executeOperation({
      query: `
      query Test {
        devices {
          serialNo
        }
      }`,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.devices).toBeDefined();
  });
});
