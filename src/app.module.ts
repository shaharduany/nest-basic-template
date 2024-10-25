import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IDbConfigurations } from '@common/interfaces/configurations.inteface';

import { UsersModule } from '@modules/users/users.module';
import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configurations from './configurations/configurations';

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
        configService.get<IDbConfigurations>('database'),
    }),
    UsersModule,
    HealthCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
