import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { MyConfigsService } from './core-nodules/my-configs/my-configs.service';

if (!process.env.IS_DEVLOPMENT) {
  require('module-alias/register');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health-check', method: RequestMethod.GET }],
  });
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(MyConfigsService);
  await app.listen(configService.getPort());
}
bootstrap();
