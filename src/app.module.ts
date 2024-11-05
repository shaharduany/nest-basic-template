import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MyConfigsModule } from './modules/my-configs/my-configs.module';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './modules/my-configs/configurations';
import { MyConfigsService } from './modules/my-configs/my-configs.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
