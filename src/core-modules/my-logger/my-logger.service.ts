import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { RequestLogsDto } from './dtos/request-logs.dto';
import { OnEvent } from '@nestjs/event-emitter';
import { ON_LOG_REQUEST } from '@app/common/constants/events.constants';
import { MyConfigsService } from '../my-configs/my-configs.service';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  constructor(
    @Inject(MyConfigsService)
    private readonly myConfigsService: MyConfigsService,
  ) {
    super();
  }

  @OnEvent(ON_LOG_REQUEST)
  public logRequest(dto: RequestLogsDto): void {
    if (!this.myConfigsService.isDevelopmentEnv()) {
      return; // Handle in production per project requirements
    }
    // this.log(`request to ${dto.originalUrl} at ${dto.requestedAt}`);
  }
}
