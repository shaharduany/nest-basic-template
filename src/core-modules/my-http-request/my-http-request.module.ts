import { Module } from '@nestjs/common';
import { MyHttpRequestService } from './my-http-request.service';
import { MyConfigsModule } from '../my-configs/my-configs.module';
import { HttpModule } from '@nestjs/axios';
import { HelpersModule } from '../helpers/helpers.module';

export const getMyHttpRequestModuleMetadata = () => ({
  imports: [MyConfigsModule, HttpModule, HelpersModule],
  providers: [MyHttpRequestService],
  exports: [MyHttpRequestService],
});

@Module(getMyHttpRequestModuleMetadata())
export class MyHttpRequestModule {}
