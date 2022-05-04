import { sign } from 'jsonwebtoken';

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

interface JwtPayload {
  email: string;
  name: string;
  roles: Permission[];
}

class JwtService {
  roles: Permission[] = [
    Permission.aggregatorAssignedDevicesView,
    Permission.aggregatorView,
    Permission.customerView,
    Permission.aggregatorManagement,
  ];

  getToken(secret: string, expiresIn: string): string {
    //  todo: what to use for name and email?
    const payload: JwtPayload = {
      email: '',
      name: '',
      roles: this.roles,
    };

    return sign(payload, secret, {
      expiresIn,
    });
  }
}

export const jwtService = new JwtService();
