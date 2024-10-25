import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';

if (!process.env.IS_DEVLOPMENT) {
  require('module-alias/register');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health-check', method: RequestMethod.GET }],
  });
  await app.listen(3000);
}
bootstrap();
