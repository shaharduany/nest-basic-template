import { usedDocumentDb } from '@app/common/constants/database.constants';
import { IMongoDbConfigurations } from '@app/common/interfaces/configs.inteface';
import { registerAs } from '@nestjs/config';

export const getMongodbConfig = (): IMongoDbConfigurations => ({
  uri: process.env.MONGO_URI,
});

export const documentDbConfig = registerAs(usedDocumentDb, getMongodbConfig);

