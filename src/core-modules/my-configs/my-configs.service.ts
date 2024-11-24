import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  IMongoDatabaseConfig,
  ISqlDatabaseConfig,
} from './interfaces/my-configs.interface';
import { ConfigKeys } from './constants/config-keys.constants';
import { NodeEnvironments } from './constants/my-configs.constants';

@Injectable()
export class MyConfigsService {
  private readonly logger = new Logger(MyConfigsService.name);

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

  public getEnv(): NodeEnvironments {
    return this.configService.get<NodeEnvironments>(ConfigKeys.nodeEnv);
  }

  public isDevelopmentEnv(): boolean {
    return this.getEnv() === NodeEnvironments.development;
  }

  public isNodeEnv(env: NodeEnvironments): boolean {
    return this.getEnv() === env;
  }

  public getInternalDomains(): string[] {
    return this.configService.get<string[]>(ConfigKeys.internalDomains);
  }

  public getServiceName(): string {
    return this.configService.get<string>('app.serviceName');
  }

  public getInternalApiKey(): string {
    return this.configService.get<string>('app.internalApiKey');
  }
}
