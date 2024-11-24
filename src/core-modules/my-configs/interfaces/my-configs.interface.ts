import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {
  NodeEnviornments,
  SupportedDatabases,
} from '../constants/my-configs.constants';

export interface IAppConfig {
  host: string;
  port: number | string;
  nodeEnv: NodeEnviornments;
  jwtSecret: string;
  certPath: string;
  internalDomains: string[];
  serviceName: string;
  internalApiKey: string;
}

export interface ISentryConfig {
  dsn: string;
  environment: string;
  enabled: boolean;
  tracesSampleRate: number;
  profilesSampleRate: number;
}

export interface ISqlDatabaseConfig {
  type: SupportedDatabases;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  autoLoadEntities: boolean;
  synchronize: boolean;
  namingStrategy: SnakeNamingStrategy;
}

export interface IMongoDatabaseConfig {
  uri: string;
}

export interface IConfigurations {
  app: IAppConfig;
  sentry: ISentryConfig;
  sqlDatabase: ISqlDatabaseConfig;
  mongoDatabase: IMongoDatabaseConfig;
}
