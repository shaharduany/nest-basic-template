import {
  IConfigurations,
  NODE_ENV,
} from '@app/common/interfaces/configurations.inteface';
import { registerAs } from '@nestjs/config';
import { appConfigs } from './appConfigs';
import { databaseConfig } from './databaseConfigs';

export const configurations = () => [
  registerAs('app', () => appConfigs),
  registerAs('database', () => databaseConfig),
];
