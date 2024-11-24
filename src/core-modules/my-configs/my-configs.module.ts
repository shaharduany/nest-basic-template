import { Module } from '@nestjs/common';
import { MyConfigsService } from './my-configs.service';
import { ConfigModule } from '@nestjs/config';
import { configurations, configValidations } from './configurations';

export const getMyConfigsModuleMetadata = () => ({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
      validationSchema: configValidations(),
      envFilePath: '.env',
    }),
  ],
  providers: [MyConfigsService],
  exports: [MyConfigsService],
});

@Module(getMyConfigsModuleMetadata())
export class MyConfigsModule {}
