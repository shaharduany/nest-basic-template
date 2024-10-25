import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { IHttpRequestConfigs } from '@common/interfaces/configurations.inteface';

import { configurations } from '@app/configurations/configurations';
import { UsersModule } from '@modules/users/users.module';
import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_TYPE } from './common/constants/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (
        ConfigService: ConfigService,
      ): Promise<IHttpRequestConfigs> => {
        return ConfigService.get<IHttpRequestConfigs>('httpRequests');
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: DB_TYPE,
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    UsersModule,
    HealthCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
