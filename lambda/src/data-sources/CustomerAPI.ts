import { DataSource, DataSourceConfig } from 'apollo-datasource';
import axios, { AxiosInstance } from 'axios';
import { AppContext } from '../context';
import { jwtService } from '../services/jwtService';
import customerMockData from '../../../test/postman/mock_data.json';
import { env, NodeEnv } from './../config';

interface CustomerAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  countryCode: string;
}

interface CustomerData {
  status: boolean;
  message: string;
  field: string;
  content: {
    id: string;
    address: CustomerAddress;
  };
}

export class CustomerAPI extends DataSource<AppContext> {
  context!: AppContext;
  client: AxiosInstance;

  constructor(private secret: string, private expiresIn: string, readonly baseURL: string) {
    super();
    const jwt = jwtService.getToken(this.secret, this.expiresIn) || '';
    this.client = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  initialize(config: DataSourceConfig<AppContext>): void {
    this.context = config.context;
  }

  async getCustomerData(serialNo: number): Promise<CustomerData> {
    if (env === NodeEnv.TEST) {
      return customerMockData;
    }
    const { data } = await this.client.get(`CustomerData/GetCustomerData`, {
      params: { serialNo: serialNo.toString() },
    });
    return data;
  }
}
