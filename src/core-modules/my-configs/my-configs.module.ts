import { Module } from '@nestjs/common';
import { MyConfigsService } from './my-configs.service';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './configurations';

export const getMyConfigsModuleMetadata = () => ({
  imports: [ConfigModule.forFeature(configurations)],
  providers: [MyConfigsService],
  exports: [MyConfigsService],
});

@Module(getMyConfigsModuleMetadata())
export class MyConfigsModule {}
