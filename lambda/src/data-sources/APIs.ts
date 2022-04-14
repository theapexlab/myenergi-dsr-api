import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { AdminGroupAPI } from './AdminGroupAPI';
import { AppClientAPI } from './AppClientAPI';
import { ControlGroupAPI } from './ControlGroupAPI';
import { CustomerAPI } from './CustomerAPI';
import { DeviceAPI } from './DeviceAPI';
import { HistoryAPI } from './HistoryAPI';
import { StatusAPI } from './StatusAPI';
import { dal, auth, customerApi } from './../config';

export interface AppDataSources extends DataSources<Record<string, any>> {
  deviceApi: DeviceAPI;
  historyApi: HistoryAPI;
  statusApi: StatusAPI;
  controlGroupApi: ControlGroupAPI;
  adminGroupApi: AdminGroupAPI;
  appClientApi: AppClientAPI;
  customerApi: CustomerAPI;
}

export const getAPIs = (): AppDataSources => {
  return {
    deviceApi: new DeviceAPI(dal.url, dal.adminSecret),
    historyApi: new HistoryAPI(dal.url, dal.adminSecret),
    statusApi: new StatusAPI(dal.url, dal.adminSecret),
    controlGroupApi: new ControlGroupAPI(dal.url, dal.adminSecret),
    adminGroupApi: new AdminGroupAPI(dal.url, dal.adminSecret),
    appClientApi: new AppClientAPI(auth.userPoolId, auth.region),
    customerApi: new CustomerAPI(customerApi.jwtSecret, customerApi.expiresIn, customerApi.url),
  };
};
export const getDataSources = (ctx: { dataSources: AppDataSources }): AppDataSources => {
  const { dataSources } = ctx;
  return dataSources;
};
