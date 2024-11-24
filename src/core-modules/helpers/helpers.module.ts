import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';

export const getHelpersModuleMetadata = () => ({
  providers: [HelpersService],
  exports: [HelpersService],
});

@Module(getHelpersModuleMetadata())
export class HelpersModule {}
