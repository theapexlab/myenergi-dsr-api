import { DeviceAPI } from './DeviceAPI';

export const getAPIs = () => {
  return {
    deviceApi: new DeviceAPI(process.env.DAL_ENDPOINT, process.env.DAL_ADMIN_SECRET),
  };
};
