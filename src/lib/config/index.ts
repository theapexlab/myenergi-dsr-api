import convict from 'convict';
import 'dotenv/config';
import path from 'path';

export enum NodeEnv {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

type ConfigType = {
  env: NodeEnv;
  dal: {
    url: string;
    adminSecret: string;
  };
  auth: {
    userPoolId: string;
    region: string;
    scope: string;
  };
  superAdmin: {
    username: string;
    password: string;
    realm: string;
  };
  customerApi: {
    jwtSecret: string;
    expiresIn: string;
    url: string;
  };
};

const config = convict<ConfigType>({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: NodeEnv.DEV,
    env: 'NODE_ENV',
  },
  dal: {
    url: {
      doc: 'The hasura graphql endpoint.',
      format: String,
      default: 'http://localhost:8080/v1/graphql',
      env: 'DAL_ENDPOINT',
    },
    adminSecret: {
      doc: 'The hasura admin secret.',
      format: String,
      default: 'admin123',
      env: 'DAL_ADMIN_SECRET',
    },
  },
  auth: {
    userPoolId: {
      doc: 'The cognito user pool id.',
      format: String,
      default: '',
      env: 'USER_POOL_ID',
    },
    region: {
      doc: 'The cognito region',
      format: String,
      default: 'eu-west-1',
      env: 'USER_POOL_REGION',
    },
    scope: {
      doc: 'The cognito scope',
      format: String,
      default: '',
      env: 'COGNITO_OAUTH_SCOPE',
    },
  },
  superAdmin: {
    username: {
      doc: 'Basic auth username.',
      format: String,
      default: 'admin',
      env: 'ADMIN_USERNAME',
    },
    password: {
      doc: 'Basic auth password.',
      format: String,
      default: 'admin123',
      env: 'ADMIN_PASSWORD',
    },
    realm: {
      doc: 'Basic auth realm.',
      format: String,
      default: 'admin123',
      env: 'USER_POOL_REGION',
    },
  },
  customerApi: {
    jwtSecret: {
      doc: 'JWT secret to sign the tokens for customerAPI requests',
      format: String,
      default: '',
      env: 'JWT_SECRET',
    },
    expiresIn: {
      doc: 'Time for which the token is valid',
      format: String,
      default: '1h',
      env: 'JWT_EXPIRES_IN',
    },
    url: {
      doc: 'Url of myaccount server to request customer data',
      format: String,
      default: 'https://staging-myaccount.myenergi.com:9090/',
      env: 'CUSTOMER_DATA_API_ROOT',
    },
  },
});

// Load environment dependent configuration
config.loadFile(path.join(__dirname, config.get('env') + '.json'));

// throws error if config does not conform to schema
config.validate({ allowed: 'strict' });

const properties = config.getProperties();

export const env = properties.env;
export const dal = properties.dal;
export const auth = properties.auth;
export const superAdmin = properties.superAdmin;
export const customerApi = properties.customerApi;
