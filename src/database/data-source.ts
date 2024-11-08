import 'dotenv/config';

import { DataSource } from 'typeorm';
import { migrations } from './migrations/index';
import { configurations } from '@app/core-modules/my-configs/configurations';

const AppDataSource: DataSource = new DataSource({
  ...configurations().sqlDatabase,
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
