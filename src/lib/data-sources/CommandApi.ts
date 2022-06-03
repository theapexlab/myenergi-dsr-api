import axios, { AxiosInstance } from 'axios';
import { AppContext } from '../auth/auth.type';
import { NotFoundError } from './CustomError';
import { jwtService } from '../services/jwtService';
import { logger } from '../utils/logger';
import { DeviceHubDetails, HubDetails } from '../models/hub';
import {
  CommandResponse,
  SetFrequency,
  SetFrequencyCommandBaseArgs,
  SetLoad,
  SetLoadCommandBaseArgs,
} from '../models/command';
import { GraphqlDataSource } from './GraphqlDataSource';
import { mapDeviceHubDetailsToSetDeviceLoadInputs, mapDeviceHubDetailsToUniqueHubDetails } from '../utils';
import { mockCommandResponse } from '../mocks/mockCommandResponse';
import { env } from '../config';

export interface SetDeviceLoadInput {
  hubDetails: HubDetails;
  load: SetLoad;
}

export class CommandApi extends GraphqlDataSource {
  context!: AppContext;
  client: AxiosInstance;

  constructor(baseURL: string, secret: string, jwtSecret: string, expiresIn: string, apiUrl: string) {
    super(baseURL, secret);
    const jwt = jwtService.getToken(jwtSecret, expiresIn) || '';
    this.client = axios.create({
      baseURL: apiUrl,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      timeout: 15000,
    });
  }

  async setGroupLoad(deviceHubDetails: DeviceHubDetails[], load: SetLoadCommandBaseArgs): Promise<CommandResponse[]> {
    const inputs = mapDeviceHubDetailsToSetDeviceLoadInputs(deviceHubDetails, load);
    return await Promise.all(
      Object.values(inputs).map(async (input) => {
        return await this.sendLoadCommand(input);
      })
    );
  }

  async setGroupFrequencyResponse(
    deviceHubDetails: DeviceHubDetails[],
    setFrequencyArgs: SetFrequencyCommandBaseArgs
  ): Promise<CommandResponse[]> {
    const uniqueHubDetails = mapDeviceHubDetailsToUniqueHubDetails(deviceHubDetails);
    return await Promise.all(
      uniqueHubDetails.map(async (hubDetails) => {
        return await this.sendFrequencyCommand(hubDetails, setFrequencyArgs);
      })
    );
  }

  async sendLoadCommand({ hubDetails, load }: SetDeviceLoadInput): Promise<CommandResponse> {
    try {
      if (env === 'test') {
        return mockCommandResponse(load.csn);
      }

      // todo: replace "any" with generated graphql Command type, but with titleCase props (we receive them like t)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await this.client.post<any>(`/dsr/set-load`, {
        hubDetails,
        load,
      });

      return {
        id: data.id,
        error: null,
        commandInitiated: data.commandInitiated,
        csn: data.commandParameters.dsrSetLoad.csn,
      };
    } catch (error) {
      logger.error(error || 'Unknown error');
      return {
        id: null,
        error: JSON.stringify(error),
        commandInitiated: null,
        csn: null,
      };
    }
  }

  async sendFrequencyCommand(hubDetails: HubDetails, frequencyResponse: SetFrequency): Promise<CommandResponse> {
    try {
      if (env === 'test') {
        return mockCommandResponse();
      }

      // todo: replace "any" with generated graphql Command type, but with titleCase props (we receive them like t)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await this.client.post<any>(`/dsr/set-frequency`, {
        hubDetails,
        frequencyResponse,
      });

      return {
        id: data.id,
        error: null,
        commandInitiated: data.commandInitiated,
        csn: null,
      };
    } catch (error) {
      logger.error(error || 'Unknown error');
      return {
        id: null,
        error: JSON.stringify(error),
        commandInitiated: null,
        csn: null,
      };
    }
  }

  async getHubDetails(serialNo: number): Promise<DeviceHubDetails> {
    const { devices } = await this.sdk.DeviceHubData({ serialNo });
    const { zappi, eddi } = devices[0] || {};
    const hubDetails = zappi || eddi;
    if (!hubDetails) {
      throw new NotFoundError(`Hub related to device: ${serialNo}, was not found`);
    }
    return hubDetails;
  }

  async getControlGroupHubDetails(controlGroupId: number): Promise<DeviceHubDetails[]> {
    const { devices } = await this.sdk.ControlGroupHubs({ controlGroupId });
    const hubDetails = devices.map(({ zappi, eddi }) => {
      return zappi || eddi;
    });
    if (hubDetails.length === 0) {
      throw new NotFoundError(`Hub related to control group: ${controlGroupId}, was not found`);
    }
    return hubDetails.filter(({ hub }) => !!hub);
  }

  async getAdminGroupHubDetails(adminGroupId: number): Promise<DeviceHubDetails[]> {
    const { devices } = await this.sdk.AdminGroupHubs({ adminGroupId });
    const hubDetails = devices.map(({ zappi, eddi }) => {
      return zappi || eddi;
    });
    if (hubDetails.length === 0) {
      throw new NotFoundError(`Hub related to admin group: ${adminGroupId}, was not found`);
    }
    return hubDetails.filter(({ hub }) => !!hub);
  }
}
