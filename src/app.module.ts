import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { IHttpRequestConfigs } from '@common/interfaces/configurations.inteface';

import { configurations } from '@app/configurations/configurations';
import { UsersModule } from '@modules/users/users.module';
import { HealthCheckModule } from '@modules/health-check/health-check.module';

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
    UsersModule,
    HealthCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
