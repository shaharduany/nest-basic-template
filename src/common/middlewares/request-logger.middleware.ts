import { Injectable, NestMiddleware } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request, Response, NextFunction } from 'express';
import { ON_LOG_REQUEST } from '../constants/events.constants';
import { RequestLogsDto } from '@app/core-modules/my-logger/dtos/request-logs.dto';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  use(request: Request, response: Response, next: NextFunction) {
    const dto = RequestLogsDto.fromRequest(request);

    request.on('close', async () => {
      dto.recordResponse(response);
      this.eventEmitter.emit(ON_LOG_REQUEST, dto);
    });

    if (next) next();
  }
}
