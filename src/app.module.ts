import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configurations } from '@/configurations/configurations';
import { HttpModule } from '@nestjs/axios';
import { IHttpRequestConfigs } from './common/interfaces/configurations.inteface';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
