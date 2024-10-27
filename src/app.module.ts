import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  IDbConfigurations,
  IMongoDbConfigurations,
} from '@common/interfaces/configs.inteface';

import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configurations } from '@configurations/configurations';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  usedDocumentDb,
  usedSqlDatabase,
} from './common/constants/database.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: configurations,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get<IDbConfigurations>(usedSqlDatabase),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const config =
          configService.get<IMongoDbConfigurations>(usedDocumentDb);
        return config;
      },
    }),
    HealthCheckModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
