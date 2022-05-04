import { OpenAPI } from 'sofa-api';
import { schema } from './schema';

export const openApi = OpenAPI({
  schema,
  info: {
    title: 'Myenergi DSR',
    version: '0.1.0',
  },
});
