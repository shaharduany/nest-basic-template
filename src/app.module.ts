import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthCheckModule } from '@app/core-modules/health-check/health-check.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './business-modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MyConfigsModule } from './core-modules/my-configs/my-configs.module';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './core-modules/my-configs/configurations';
import { MyConfigsService } from './core-modules/my-configs/my-configs.service';
import { HelpersModule } from './core-modules/helpers/helpers.module';
import { MyLoggerModule } from './core-modules/my-logger/my-logger.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RequestLoggerMiddleware } from './common/middlewares/request-logger.middleware';
import { MyCronsModule } from './core-modules/my-crons/my-crons.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      load: [configurations],
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [MyConfigsModule],
      inject: [MyConfigsService],
      useFactory: async (myConfigService: MyConfigsService) =>
        myConfigService.getSqlDatabaseConfig(),
    }),
    MongooseModule.forRootAsync({
      imports: [MyConfigsModule],
      inject: [MyConfigsService],
      useFactory: async (myConfigService: MyConfigsService) =>
        myConfigService.getMongoDatabaseConfig(),
    }),
    HealthCheckModule,
    UsersModule,
    MyConfigsModule,
    HelpersModule,
    MyLoggerModule,
    MyCronsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
