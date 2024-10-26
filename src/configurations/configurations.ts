import * as Joi from 'joi';
import { appConfig, appConfigValidations } from './app.config';
import { databaseConfig, databaseConfigValidations } from './database.config';

export const configurations = [appConfig, databaseConfig];

export const configValidations = Joi.object({
  app: appConfigValidations,
  database: databaseConfigValidations,
});
