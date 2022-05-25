import { SetDeviceLoadInput } from '../data-sources/CommandApi';
import { CommandResponse } from '../models/command';

export const mockDsrSetLoad = ({ hubDetails: _, load }: SetDeviceLoadInput): CommandResponse => {
  return {
    id: 'test-id',
    csn: load.csn,
    commandInitiated: new Date().toUTCString(),
    error: null,
  };
};
