import { RESTDataSource } from 'apollo-datasource-rest/dist/RESTDataSource';
import { ControlGroup } from '../control-group';
import { ControlGroupsArgs, MutateControlGroupArgs } from '../control-group/controlGroup.args';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { getSdk } from '../generated/graphql';
import { AffectedResponse } from '../shared';
import { getGraphqlSdk } from './getGraphqlSdk';
import { NotFoundError } from './NotFoundError';

export class ControlGroupAPI extends RESTDataSource {
  sdk: ReturnType<typeof getSdk>;

  constructor(baseURL: string, secret: string) {
    super();
    this.baseURL = baseURL;
    this.sdk = getGraphqlSdk({ baseURL, secret });
  }

  async getControlGroups({ limit, offset }: ControlGroupsArgs): Promise<ControlGroup[]> {
    const { controlGroups } = await this.sdk.ControlGroups({ limit, offset });
    return controlGroups;
  }

  async createControlGroup(name: string, adminGroupId: number): Promise<ControlGroup> {
    const { controlGroup } = await this.sdk.CreateControlGroup({ name, adminGroupId });
    return controlGroup;
  }

  async getControlGroupById(id: number): Promise<ControlGroup> {
    const { controlGroup } = await this.sdk.ControlGroup({ id });
    return controlGroup;
  }

  async addDevice(args: MutateControlGroupArgs, adminGroupId: number): Promise<AffectedResponse> {
    const { id: control_group_id, serialNos } = args;

    const {
      admin_group_by_pk: { admin_group_devices: devices },
    } = await this.sdk.AdminGroupDevicesBySerialNos({ adminGroupId, serialNos });

    if (!devices.length) {
      throw new NotFoundError(`Device with serial number ${serialNos} not found`);
    }

    const { controlGroup } = await this.sdk.ControlGroup({ id: control_group_id });

    if (!controlGroup) {
      throw new NotFoundError(`Control group with id ${control_group_id} not found`);
    }

    const objects = devices.map(({ serialNo: serialno, deviceClass }) => ({
      control_group_id,
      admin_group_id: adminGroupId,
      serialno,
      device_type: deviceClass,
    }));

    const { response } = await this.sdk.AddDevice({ objects });

    return {
      affectedRows: response?.affectedRows ?? 0,
    };
  }

  async removeDevice(args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { id: controlGroupId, serialNos } = args;
    const { response } = await this.sdk.RemoveDevice({ controlGroupId, serialNos });
    return {
      affectedRows: response?.affectedRows ?? 0,
    };
  }

  async getControlGroupDevices(id: number): Promise<Device[]> {
    const { controlGroupDevices } = await this.sdk.ControlGroupDevices({ controlGroupId: id });
    if (!controlGroupDevices) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return controlGroupDevices.devices.flatMap(({ zappi, eddi }) => [zappi, eddi]).filter((item) => !!item);
  }

  async getControlGroupStatus(id: number): Promise<DeviceStatus[]> {
    const { controlGroupStatus } = await this.sdk.ControlGroupStatus({ controlGroupId: id });
    if (!controlGroupStatus) {
      throw new NotFoundError(`Control group with id ${id} not found`);
    }
    return controlGroupStatus.devices
      .flatMap(({ zappi, eddi }) => [zappi, eddi])
      .filter((item) => !!item)
      .map(({ updateDate, ...device }) => ({
        updateDate: new Date(updateDate),
        ...device,
      }));
  }
}
