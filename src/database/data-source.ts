import 'dotenv/config';
import { databaseConfig } from '../configurations/databaseConfigs';
import { DataSource } from 'typeorm';
import { migrations } from './migrations/index';

const AppDataSource: DataSource = new DataSource({
  ...databaseConfig,
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
