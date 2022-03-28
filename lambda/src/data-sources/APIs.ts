import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { AdminGroupAPI } from './AdminGroupAPI';
import { ControlGroupAPI } from './ControlGroupAPI';
import { DeviceAPI } from './DeviceAPI';
import { HistoryAPI } from './HistoryAPI';

export interface AppDataSources extends DataSources<Record<string, any>> {
  deviceApi: DeviceAPI;
  historyApi: HistoryAPI;
  controlGroupApi: ControlGroupAPI;
  adminGroupApi: AdminGroupAPI;
}

export const getAPIs = (): AppDataSources => {
  return {
    deviceApi: new DeviceAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    historyApi: new HistoryAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    controlGroupApi: new ControlGroupAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    adminGroupApi: new AdminGroupAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
  };
};

export const getApi = <K extends keyof AppDataSources>(
  name: K,
  ctx: { dataSources: AppDataSources }
): AppDataSources[K] => {
  const { dataSources } = ctx;
  return dataSources[name];
};
