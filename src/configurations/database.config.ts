import { DB_TYPE } from '@app/common/constants/database.constants';
import { registerAs } from '@nestjs/config';

export const getDatabaseConfig = () => ({
  type: DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: false,
});

export const databaseConfig = registerAs('database', getDatabaseConfig);
