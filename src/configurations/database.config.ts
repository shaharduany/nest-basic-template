import {
  DatabaseTypes,
  DB_TYPE,
} from '@app/common/constants/database.constants';
import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const getDatabaseConfig = () => ({
  type: DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
});

export const databaseConfig = registerAs('database', getDatabaseConfig);

export const databaseConfigValidations = Joi.object({
  type: Joi.string()
    .allow(DatabaseTypes.mariadb, DatabaseTypes.mysql)
    .required(),
  host: Joi.string().default('localhost'),
  port: Joi.number().required(),
  database: Joi.string().required(),
  username: Joi.string().required(),
  autoLoadEntities: Joi.bool().optional(),
  synchronize: Joi.bool().allow(false),
});
