import "reflect-metadata";
import { openApi } from '../src/rest-api';

openApi.save('./lambda/src/swagger.json');
