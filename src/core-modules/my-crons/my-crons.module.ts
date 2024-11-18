import { Module } from '@nestjs/common';
import { MyCronsService } from './my-crons.service';
import { MyConfigsModule } from '../my-configs/my-configs.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MyConfigsModule, ScheduleModule],
  providers: [MyCronsService],
  exports: [MyCronsService],
})
export class MyCronsModule {}
