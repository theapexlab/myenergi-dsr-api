import { RESTDataSource } from 'apollo-datasource-rest';

export class DeviceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = '';
  }

  getDevice() {
    // to prevent empty function lint error
  }

  getStatus() {
    return {
      administrativeGroup: '',
      anonymisedDataOnly: '',
      frequencyResponseAvailable: '',
      serialNo: '',
      productCode: 0,
      frequencyResponseMode: '',
      frequency: '',
      volt: 0,
    };
  }
}
