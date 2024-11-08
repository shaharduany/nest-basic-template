import { Module } from '@nestjs/common';
import { MyLoggerService } from './my-logger.service';
import { MyConfigsModule } from '../my-configs/my-configs.module';

@Module({
  imports: [MyConfigsModule],
  providers: [MyLoggerService],
})
export class MyLoggerModule {}
