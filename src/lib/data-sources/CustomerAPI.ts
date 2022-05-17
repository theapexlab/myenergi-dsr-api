import { DataSource, DataSourceConfig } from 'apollo-datasource';
import axios, { AxiosInstance } from 'axios';
import { AppContext } from '../auth/auth.type';
import customerMockData from '../mocks/customerData.json';
import { jwtService } from '../services/jwtService';
import { logger } from '../utils/logger';
import { isTestEnv } from '../utils/helpers';

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

  async getCustomerData(serialNo: number): Promise<CustomerData | null> {
    if (isTestEnv) return customerMockData;

    try {
      const { data } = await this.client.get(`CustomerData/GetCustomerData`, {
        params: { serialNo: serialNo.toString() },
      });
      return data;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}
