import { DeviceHistory } from '../device-history';
import { EddiHistoryFragment, ZappiHistoryFragment } from '../generated/graphql';

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
