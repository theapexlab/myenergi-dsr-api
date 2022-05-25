import { DeviceHubDetails } from '../models/hub';
import { mapDeviceHubDetailsToUniqueHubDetails } from './maps';

describe('Maps tests', () => {
  describe('mapDeviceHubDetailsToUniqueHubDetails', () => {
    it('should return an array of hubDetails with length 2 when there are 2 same and a different hub', () => {
      const deviceHubDetails: DeviceHubDetails[] = [
        {
          hub: {
            serialNo: 1,
            addressRaw: 1,
            networkId: 1,
            port: 1,
          },
          deviceAddressRaw: 1,
          deviceSerialNo: 1,
        },
        {
          hub: {
            serialNo: 1,
            addressRaw: 1,
            networkId: 1,
            port: 1,
          },
          deviceAddressRaw: 1,
          deviceSerialNo: 1,
        },
        {
          hub: {
            serialNo: 2,
            addressRaw: 2,
            networkId: 2,
            port: 2,
          },
          deviceAddressRaw: 2,
          deviceSerialNo: 2,
        },
      ];
      const hubDetails = mapDeviceHubDetailsToUniqueHubDetails(deviceHubDetails);
      expect(hubDetails.length).toBe(2);
    });
    it('should return an array of hubDetails with length 1 when there are 2 references of the same hub', () => {
      const deviceHubDetails: DeviceHubDetails[] = [
        {
          hub: {
            serialNo: 1,
            addressRaw: 1,
            networkId: 1,
            port: 1,
          },
          deviceAddressRaw: 1,
          deviceSerialNo: 1,
        },
        {
          hub: {
            serialNo: 1,
            addressRaw: 1,
            networkId: 1,
            port: 1,
          },
          deviceAddressRaw: 1,
          deviceSerialNo: 1,
        },
      ];
      const hubDetails = mapDeviceHubDetailsToUniqueHubDetails(deviceHubDetails);
      expect(hubDetails.length).toBe(1);
    });
    it('should return an array of hubDetails with length 0 when empty array if provided', () => {
      const deviceHubDetails: DeviceHubDetails[] = [];
      const hubDetails = mapDeviceHubDetailsToUniqueHubDetails(deviceHubDetails);
      expect(hubDetails.length).toBe(0);
    });
  });
});
