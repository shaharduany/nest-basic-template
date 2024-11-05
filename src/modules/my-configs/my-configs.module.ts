import { Module } from '@nestjs/common';
import { MyConfigsService } from './my-configs.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MyConfigsService],
  exports: [MyConfigsService],
})
export class MyConfigsModule {}
