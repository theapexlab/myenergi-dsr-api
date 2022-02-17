import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { schema } from './schema';

describe('', () => {
  it('returns device with the correct id', async () => {
    const testServer = new ApolloServer({
      schema,
    });

    const result = await testServer.executeOperation({
      query: `
      query Test {
        devices {
          id
        }
      }`,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.devices).toEqual([]);
  });
});
