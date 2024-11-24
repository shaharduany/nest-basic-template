import { Module } from '@nestjs/common';
import { MyLoggerService } from './my-logger.service';
import { MyConfigsModule } from '../my-configs/my-configs.module';

export const getMyLoggerModuleMetadata = () => ({
  imports: [MyConfigsModule],
  providers: [MyLoggerService],
});

@Module(getMyLoggerModuleMetadata())
export class MyLoggerModule {}
