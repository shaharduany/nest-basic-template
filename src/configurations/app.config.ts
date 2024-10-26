import { NODE_ENVIORNMENTS } from '@app/common/constants/configs.constants';
import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const getAppConfig = () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  env: NODE_ENVIORNMENTS[process.env.NODE_ENV] || NODE_ENVIORNMENTS.development,
  jwtSecret: process.env.JWT_SECRET,
});

export const appConfig = registerAs('app', getAppConfig);

export const appConfigValidations = Joi.object({
  host: Joi.string().required(),
  port: Joi.number().default(3000),
  env: Joi.string().required(),
  jwtSecret: Joi.string().required(),
});
