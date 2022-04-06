import { DeviceHistory } from '../device-history';
import { Device_Type_Enum, EddiHistoryFragment, ZappiHistoryFragment } from '../generated/graphql';

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
