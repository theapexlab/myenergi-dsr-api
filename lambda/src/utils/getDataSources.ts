import { AppDataSources } from '../data-sources';

export const getDataSources = (ctx: { dataSources: AppDataSources }): AppDataSources => {
  const { dataSources } = ctx;
  return dataSources;
};
