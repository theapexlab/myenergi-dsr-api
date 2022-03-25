import { DeviceHistory } from '../device-history';
import { EddiHistoryFragment, ZappiHistoryFragment } from '../generated/graphql';

export const mapHistoryFragmentToDeviceHistory = ({
  timestamp,
  ...item
}: EddiHistoryFragment | ZappiHistoryFragment): DeviceHistory => {
  return {
    ...item,
    timestamp: new Date(timestamp),
  };
};
