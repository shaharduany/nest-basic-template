import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  IMongoDatabaseConfig,
  ISqlDatabaseConfig,
} from './interfaces/my-configs.interface';
import { ConfigKeys } from './constants/config-keys.constants';

@Injectable()
export class MyConfigsService {
  constructor(private configService: ConfigService) {}

  public getSqlDatabaseConfig(): ISqlDatabaseConfig {
    return this.configService.get<ISqlDatabaseConfig>(ConfigKeys.sqlDatabase);
  }

  public getMongoDatabaseConfig(): IMongoDatabaseConfig {
    return this.configService.get<IMongoDatabaseConfig>(
      ConfigKeys.mongoDatabase,
    );
  }

  public getPort(): number {
    return this.configService.get<number>(ConfigKeys.appPort);
  }
}
