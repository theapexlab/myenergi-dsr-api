import { DeviceAPI } from './data-sources';

export interface DataSources {
  deviceApi: DeviceAPI;
}

export interface Context {
  dataSources: DataSources;
}
