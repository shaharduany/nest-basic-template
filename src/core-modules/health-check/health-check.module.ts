import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HelpersModule } from '../helpers/helpers.module';

export const getHealthCheckModuleMetadata = () => ({
  imports: [HelpersModule],
  controllers: [HealthCheckController],
});

@Module(getHealthCheckModuleMetadata())
export class HealthCheckModule {}
