import { Module } from '@nestjs/common';
import { MyCronsService } from './my-crons.service';
import { MyConfigsModule } from '../my-configs/my-configs.module';
import { ScheduleModule } from '@nestjs/schedule';

export const getMyCronsModuleMetadata = () => ({
  imports: [MyConfigsModule, ScheduleModule.forRoot()],
  providers: [MyCronsService],
  exports: [MyCronsService],
});

@Module(getMyCronsModuleMetadata())
export class MyCronsModule {}
