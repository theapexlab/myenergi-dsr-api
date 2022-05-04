import { AppDataSources } from '../data-sources';

export enum RoleType {
  SUPERADMIN = 'SUPERADMIN',
  AGGREGATOR = 'AGGREGATOR',
  ANONYMOUS = 'ANONYMOUS',
}

export type SuperAdminUser = {
  role: RoleType.SUPERADMIN;
};

export type AggregatorUser = {
  role: RoleType.AGGREGATOR;
  aggregatorId: string;
};

export type AnonymousUser = {
  role: RoleType.ANONYMOUS;
};

export type AppUser = SuperAdminUser | AggregatorUser | AnonymousUser;

export interface AppContext {
  dataSources: AppDataSources;
  user: AppUser;
}

export type TokenPayload = {
  client_id?: string;
  roles?: string[];
};
