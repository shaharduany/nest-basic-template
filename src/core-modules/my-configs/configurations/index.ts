import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {
  NodeEnviornments,
  SupportedDatabases,
} from '../constants/my-configs.constants';
import { IConfigurations } from '../interfaces/my-configs.interface';

export const configurations = (): IConfigurations => {
  return {
    app: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3000,
      nodeEnv:
        NodeEnviornments[process.env.NODE_ENV?.toLowerCase()] ||
        NodeEnviornments.development,
      jwtSecret: process.env.JWT_SECRET || 'Secret',
      certPath: process.env.NODE_EXTRA_CA_CERTS || '',
    },
    sentry: {
      dsn: process.env.SENTRY_DSN || '',
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
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      database: process.env.DB_NAME || 'nest_template',
      username: process.env.DB_USERNAME || 'db',
      password: process.env.DB_PASSWORD || 'db',
      autoLoadEntities: true,
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    },
    mongoDatabase: {
      uri: process.env.MONGO_URI || 'mongodb://localhost:27017/nest_template',
    },
  };
};
