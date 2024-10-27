import 'dotenv/config';

import { DataSource } from 'typeorm';
import { migrations } from './migrations/index';
import { getSqlDbConfig } from '@app/configurations/database/sqlDb.config';

const AppDataSource: DataSource = new DataSource({
  ...getSqlDbConfig(),
  migrations,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
