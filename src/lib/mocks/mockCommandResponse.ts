import { CommandResponse } from '../models/command';

export const mockCommandResponse = (csn?: number): CommandResponse => {
  return {
    id: 'test-id',
    csn: csn || null,
    commandInitiated: new Date().toUTCString(),
    error: null,
  };
};

// Set frequency response when ok
// {
//   hubPort: 57849,
//   hubIPAddress: '34.251.158.178',
//   hubNetworkId: 157,
//   destinationDeviceAddressRaw: 72,
//   destinationDeviceSerialNo: 10633890,
//   destinationDeviceName: 'hub',
//   commandTries: 1,
//   commandLastSent: null,
//   commandInitiated: '2022-05-23T08:39:53.000Z',
//   commandType: 'dsrSetFrequency',
//   commandState: 'success',
//   commandInitiatorService: 'commandApi',
//   commandInitiatorUser: null,
//   commandParameters: { dsrSetFrequency: { DAF: 5000, UAF: 5000, DDF: 5000, UDF: 5000 } }
// }

// Set load response when ok
// {
//   id: 'ddf1551d-a18a-4997-aa4a-66fc3e1f2e79',
//   hubPort: 57849,
//   hubIPAddress: '34.251.158.178',
//   hubNetworkId: 157,
//   destinationDeviceAddressRaw: 72,
//   destinationDeviceSerialNo: 10633890,
//   destinationDeviceName: 'hub',
//   commandTries: 0,
//   commandLastSent: null,
//   commandInitiated: '2022-05-23T08:53:04.000Z',
//   commandType: 'dsrSetLoad',
//   commandState: 'initial',
//   commandInitiatorService: 'meLinkAppApi',
//   commandParameters: {
//     dsrSetLoad: { csn: 1, ttl: 100, value: 'max', deviceAddresses: [Array] }
//   }
