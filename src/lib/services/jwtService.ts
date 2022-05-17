import { sign } from 'jsonwebtoken';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { isTestEnv } from '../utils/helpers';
import { auth } from '../config';
import { UnauthorizedError } from 'type-graphql';
import { logger } from '../utils/logger';

// List of all possible permissions
export enum Permission {
  aggregatorAssignedDevicesView = 'aggregatorAssignedDevicesView',
  aggregatorManagement = 'aggregatorManagement',
  aggregatorView = 'aggregatorView',
  customerView = 'customerView',
  customerEdit = 'customerEdit',
  dashboardView = 'dashboardView',
  dashboardUpdateBoxManagement = 'dashboardUpdateBoxManagement',
  dataMigration = 'dataMigration',
  deviceBlock = 'deviceBlock',
  deviceConfigEdit = 'deviceConfigEdit',
  deviceConfigView = 'deviceConfigView',
  deviceDelete = 'deviceDelete',
  deviceSetFirmware = 'deviceSetFirmware',
  chargeLogsRead = 'chargeLogsRead',
  firmwareManagement = 'firmwareManagement',
  firmwareView = 'firmwareView',
  hubDeregister = 'hubDeregister',
  hubDetailsView = 'hubDetailsView',
  hubMonitor = 'hubMonitor',
  hubView = 'hubView',
  manageServers = 'manageServers',
  userManagement = 'userManagement',
  userView = 'userView',
}

export interface CustomJwtPayload {
  email?: string;
  name?: string;
  roles?: Permission[];
}

class JwtService {
  roles: Permission[] = [
    Permission.aggregatorAssignedDevicesView,
    Permission.aggregatorView,
    Permission.customerView,
    Permission.aggregatorManagement,
  ];

  // Verifier that expects valid access tokens:
  congnitoVerifier: any;

  constructor() {
    if (!isTestEnv) {
      this.congnitoVerifier = CognitoJwtVerifier.create({
        userPoolId: auth.userPoolId,
        tokenUse: 'access',
        clientId: null,
      });
    }
  }

  getToken(secret: string, expiresIn: string): string {
    //  todo: what to use for name and email?
    const payload: CustomJwtPayload = {
      email: '',
      name: '',
      roles: this.roles,
    };

    return sign(payload, secret, {
      expiresIn,
    });
  }

  verifyCognitoToken = async (token: string): Promise<string> => {
    if (!this.congnitoVerifier) return '';
    try {
      const { client_id: aggregatorId } = await jwtService.congnitoVerifier.verify(token);
      return aggregatorId;
    } catch (error) {
      logger.error(error);
      throw new UnauthorizedError();
    }
  };
}

export const jwtService = new JwtService();
