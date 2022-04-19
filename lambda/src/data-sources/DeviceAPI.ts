import { Device } from '../device';
import { Admin_Group_Device_Bool_Exp, Control_Group_Device_Bool_Exp } from '../generated/graphql';
import { getAggregatorCondition } from '../utils/getAggregatorCondition';
import { getDataSources } from '../utils/getDataSources';
import { NotFoundError } from './CustomError';
import { GraphqlDataSource } from './GraphqlDataSource';

interface GetDevicesInput {
  id?: number;
  offset?: number;
  limit?: number;
}

export class DeviceAPI extends GraphqlDataSource {
  constructor(baseURL: string, secret: string) {
    super(baseURL, secret);
  }

  async getById(serialNo: number): Promise<Device> {
    const { user } = this.context;
    const where = getAggregatorCondition<Admin_Group_Device_Bool_Exp>(user, (aggregatorId) => ({
      admin_group: { aggregator_id: { _eq: aggregatorId } },
      serialno: { _eq: serialNo },
    }));
    const {
      devices: [device],
    } = await this.sdk.AdminGroupDevices({ where });
    if (!device) {
      throw new NotFoundError(`Device with serial number ${serialNo} not found`);
    }
    return device;
  }

  async getAll(input: GetDevicesInput): Promise<Device[]> {
    const { id, offset, limit } = input;
    const where = getAggregatorCondition<Admin_Group_Device_Bool_Exp>(this.context.user, (aggregatorId) => ({
      admin_group: { aggregator_id: { _eq: aggregatorId }, id: id ? { _eq: id } : undefined },
    }));
    const { devices } = await this.sdk.AdminGroupDevices({
      offset,
      limit,
      where,
    });

    if (!devices.length) {
      throw new NotFoundError(`No devices found`);
    }
    return devices;
  }

  getDevicePostalCode = async (serialNo: number): Promise<string | null> => {
    const { customerApi } = getDataSources(this.context);

    const { eddi, zappi } = await this.sdk.DeviceHubSerialNo({ serialNo });
    const { hubSerialNo } = eddi || zappi || {};

    if (!hubSerialNo) {
      throw new NotFoundError(`Hub related to device with serial number ${serialNo} not found`);
    }

    const customer = await customerApi.getCustomerData(hubSerialNo);

    if (!customer) {
      return null;
    }

    const {
      content: { address },
    } = customer;

    // todo: how to respond is there is no address found for a customer
    // if (!address) {
    //   throw new NotFoundError(`Customer data related to device ${serialNo} hub not found`);
    // }

    return address?.postalCode ?? null;
  };

  async getControlGroupDevices(id: number): Promise<Device[]> {
    const { user } = this.context;
    const where = getAggregatorCondition(user, (aggregatorId) => {
      const exp: Control_Group_Device_Bool_Exp = {
        control_group: {
          admin_group: { aggregator_id: { _eq: aggregatorId } },
          id: { _eq: id },
        },
      };
      return exp;
    });
    const { devices } = await this.sdk.ControlGroupDevices({ where });
    if (!devices.length) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return devices;
  }
}
