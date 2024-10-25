import { NODE_ENVIORNMENTS } from '@app/common/constants/configs.constants';
import { registerAs } from '@nestjs/config';

export const getAppConfig = () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  env: NODE_ENVIORNMENTS[process.env.NODE_ENV] || NODE_ENVIORNMENTS.development,
});

export const appConfig = registerAs('app', getAppConfig);
