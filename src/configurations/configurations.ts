import { appConfig, appConfigValidations } from './app.config';
import { sqlDbConfig } from './database/sqlDb.config';
import { documentDbConfig } from './database/mongodb.config';

export const configurations = [appConfig, sqlDbConfig, documentDbConfig];
