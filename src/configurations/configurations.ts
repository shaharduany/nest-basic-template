import {
  IConfigurations,
  NODE_ENV,
} from '@/common/interfaces/configurations.inteface';

export const configurations = (): IConfigurations => ({
  app: {
    host: process.env.HOST,
    port: process.env.PORT,
    env: process.env.NODE_ENV as NODE_ENV,
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  httpRequests: {
    timeout: 30,
  },
});
