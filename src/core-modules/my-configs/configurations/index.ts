import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {
  NodeEnviornments,
  SupportedDatabases,
} from '../constants/my-configs.constants';
import { IConfigurations } from '../interfaces/my-configs.interface';
import * as Joi from 'joi';

export const configurations = (): IConfigurations => {
  return {
    app: {
      host: process.env.HOST || 'localhost',
      port: +process.env.PORT,
      nodeEnv:
        NodeEnviornments[process.env.NODE_ENV?.toLowerCase()] ||
        NodeEnviornments.development,
      jwtSecret: process.env.JWT_SECRET,
      certPath: process.env.NODE_EXTRA_CA_CERTS,
      internalDomains: process.env.INTERNAL_DOMAINS?.split(',').map((domain) =>
        domain.trim(),
      ) || ['localhost'],
      serviceName: process.env.SERVICE_NAME,
      internalApiKey: process.env.INTERNAL_API_KEY,
    },
    sentry: {
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT || 'development',
      enabled:
        NodeEnviornments[process.env.NODE_ENV?.toLowerCase()] !==
        NodeEnviornments.development,
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
    },
    sqlDatabase: {
      type:
        SupportedDatabases[process.env.DB_TYPE?.toLowerCase()] ||
        SupportedDatabases.mariadb,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT || 3306,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    },
    mongoDatabase: {
      uri: process.env.MONGO_URI || 'mongodb://localhost:27017/nest_template',
    },
  };
};

export const configValidations = (): Joi.ObjectSchema =>
  Joi.object({
    app: Joi.object({
      host: Joi.string().required(),
      port: Joi.number().required(),
      nodeEnv: Joi.string().required(),
      jwtSecret: Joi.string().required(),
      certPath: Joi.string().required(),
      internalDomains: Joi.array().items(Joi.string()).required(),
      serviceName: Joi.string(),
      internalApiKey: Joi.string(),
    }),
    sentry: Joi.object({
      dsn: Joi.string().required(),
      environment: Joi.string().required(),
      enabled: Joi.boolean().required(),
    }),
    sqlDatabase: Joi.object({
      type: Joi.string().required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      database: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      autoLoadEntities: Joi.boolean().required(),
      synchronize: Joi.boolean().required(),
      namingStrategy: Joi.string().required(),
    }),
    mongoDatabase: Joi.object({
      uri: Joi.string().required(),
    }),
  });
