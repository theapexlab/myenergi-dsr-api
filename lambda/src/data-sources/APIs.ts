import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { AdminGroupAPI } from './AdminGroupAPI';
import { AppClientAPI } from './AppClientAPI';
import { ControlGroupAPI } from './ControlGroupAPI';
import { DeviceAPI } from './DeviceAPI';
import { HistoryAPI } from './HistoryAPI';

export interface AppDataSources extends DataSources<Record<string, any>> {
  deviceApi: DeviceAPI;
  historyApi: HistoryAPI;
  controlGroupApi: ControlGroupAPI;
  adminGroupApi: AdminGroupAPI;
  appClientApi: AppClientAPI;
}

export const getAPIs = (): AppDataSources => {
  return {
    deviceApi: new DeviceAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    historyApi: new HistoryAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    controlGroupApi: new ControlGroupAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    adminGroupApi: new AdminGroupAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    appClientApi: new AppClientAPI(process.env.USER_POOL_ID, process.env.USER_POOL_REGION),
  };
};

export const getDataSources = (ctx: { dataSources: AppDataSources }): AppDataSources => {
  const { dataSources } = ctx;
  return dataSources;
};
