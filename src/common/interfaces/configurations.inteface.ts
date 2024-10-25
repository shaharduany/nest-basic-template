export type NODE_ENV = 'development' | 'production' | 'test';

export interface IAppConfigurations {
  host: string;
  port: string;
  env: NODE_ENV;
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
