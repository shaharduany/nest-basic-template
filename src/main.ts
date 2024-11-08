import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  INestApplication,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { MyConfigsService } from './core-modules/my-configs/my-configs.service';
import { MyLoggerService } from './core-modules/my-logger/my-logger.service';

if (!process.env.IS_DEVLOPMENT) {
  require('module-alias/register');
}

const registerCrashingEvents = (logger: MyLoggerService) => {
  const crashingEvents = ['uncaughtException', 'unhandledRejection'];
  crashingEvents.forEach((event) => {
    process.on(event, (error: Error) => {
      logger.error(error.message, error.stack);
    });
  });
};

const registerLogger = (app: INestApplication) => {
  const logger = app.get(MyLoggerService);
  logger.setContext('AppCatcherV2');
  registerCrashingEvents(logger);
  app.useLogger(logger);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health-check', method: RequestMethod.GET }],
  });
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(MyConfigsService);
  registerLogger(app);

  await app.listen(configService.getPort());
}

bootstrap();
