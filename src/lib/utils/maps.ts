import { DeviceHistory } from '../models/device-history';
import { DeviceStatus } from '../models/device-status';
import {
  Device_Type_Enum,
  EddiHistoryFragment,
  EddiStatusFragment,
  ZappiHistoryFragment,
  ZappiStatusFragment,
} from '../generated/graphql';
import { SetDeviceLoadInput } from '../data-sources/CommandApi';
import { DeviceHubDetails, HubDetails } from '../models/hub';
import { SetLoadCommandBaseArgs } from '../models/command/command.args';

export const mapHistoryFragmentToDeviceHistory = ({
  timestamp,
  ...item
}: EddiHistoryFragment | ZappiHistoryFragment): DeviceHistory => {
  const isUTC = timestamp.slice(timestamp.length - 1) === 'Z';
  const value = isUTC ? timestamp : `${timestamp}Z`;

  return {
    ...item,
    timestamp: new Date(value).toISOString(),
  };
};

export const mapSerialNo = (item: { serialNo: number }): number => {
  return item.serialNo;
};

export const mapDeviceClassToDeviceType = (deviceClass: string | 'EDDI' | 'ZAPPI'): Device_Type_Enum => {
  return deviceClass === 'ZAPPI' ? Device_Type_Enum.Zappi : Device_Type_Enum.Eddi;
};

interface EddiOrZappiStatus {
  zappi?: ZappiStatusFragment;
  eddi?: EddiStatusFragment;
}
//  todo: unit test
export const mapEddiOrZappiStatusToDeviceStatus = (devices: EddiOrZappiStatus[]): DeviceStatus[] => {
  return devices
    .flatMap(({ zappi, eddi }) => [zappi, eddi])
    .filter((item) => !!item)
    .map(({ updateDate, ...device }) => ({
      ...device,
      deviceClass: mapDeviceClassToDeviceType(device.deviceClass),
      updateDate: new Date(updateDate),
    }));
};

export const mapDeviceHubDetailsToSetDeviceLoadInputs = (
  deviceHubDetails: DeviceHubDetails[],
  { csn, value, ttl }: SetLoadCommandBaseArgs
): Record<number, SetDeviceLoadInput> => {
  return deviceHubDetails.reduce<Record<number, SetDeviceLoadInput>>((acc, { deviceAddressRaw, hub }) => {
    const { serialNo } = hub;
    if (acc[serialNo]) {
      acc[serialNo].load.deviceAddresses.push(deviceAddressRaw);
      return acc;
    }
    acc[serialNo] = {
      hubDetails: hub,
      load: {
        csn,
        value,
        ttl,
        deviceAddresses: [deviceAddressRaw],
      },
    };
    return acc;
  }, {});
};

export const mapDeviceHubDetailsToUniqueHubDetails = (deviceHubDetails: DeviceHubDetails[]): HubDetails[] => {
  return Object.values(deviceHubDetails.reduce((acc, { hub }) => Object.assign(acc, { [hub.serialNo]: hub }), {}));
};
