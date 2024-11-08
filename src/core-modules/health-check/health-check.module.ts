import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HelpersModule } from '../helpers/helpers.module';

@Module({
  imports: [HelpersModule],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
