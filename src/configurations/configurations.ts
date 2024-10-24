import { IConfigurations } from '@/common/interfaces/configurations.inteface';

export const configurations = (): IConfigurations => ({
  app: {
    host: process.env.HOST,
    port: process.env.PORT,
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
