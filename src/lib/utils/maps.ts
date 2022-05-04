import { DeviceHistory } from '../models/device-history';
import { DeviceStatus } from '../models/device-status';
import {
  Device_Type_Enum,
  EddiHistoryFragment,
  EddiStatusFragment,
  ZappiHistoryFragment,
  ZappiStatusFragment,
} from '../generated/graphql';

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
