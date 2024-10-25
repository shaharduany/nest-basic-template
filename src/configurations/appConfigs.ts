import { NODE_ENVIORNMENTS } from '@app/common/constants/configurations';

export const appConfigs = {
  host: process.env.HOST,
  port: process.env.PORT,
  env: NODE_ENVIORNMENTS[process.env.NODE_ENV] || NODE_ENVIORNMENTS.development,
};
