import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { ControlGroupAPI } from './ControlGroupAPI';
import { DeviceAPI } from './DeviceAPI';
import { HistoryAPI } from './HistoryAPI';

export interface AppDataSources extends DataSources<Record<string, any>> {
  deviceApi: DeviceAPI;
  historyApi: HistoryAPI;
  controlGroupApi: ControlGroupAPI;
}

export const getAPIs = (): AppDataSources => {
  return {
    deviceApi: new DeviceAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    historyApi: new HistoryAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
    controlGroupApi: new ControlGroupAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
  };
};
