import { Module } from '@nestjs/common';
import { MyConfigsService } from './my-configs.service';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './configurations';

@Module({
  imports: [ConfigModule.forFeature(configurations)],
  providers: [MyConfigsService],
  exports: [MyConfigsService],
})
export class MyConfigsModule {}

