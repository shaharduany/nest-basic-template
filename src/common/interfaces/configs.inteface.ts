import { NODE_ENVIORNMENTS } from '../constants/configs.constants';

export interface IAppConfigurations {
  host: string;
  port: string;
  env: NODE_ENVIORNMENTS;
}

export interface IDbConfigurations {
  host: string;
  port: string;
  name: string;
  username: string;
  password: string;
}

export interface IHttpRequestConfigs {
  timeout: number;
}

export interface IConfigurations {
  app: IAppConfigurations;
  database: IDbConfigurations;
  httpRequests: IHttpRequestConfigs;
}
