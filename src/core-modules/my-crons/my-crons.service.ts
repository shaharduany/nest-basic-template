import { Inject, Injectable, Logger } from '@nestjs/common';
import { CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { MyConfigsService } from '../my-configs/my-configs.service';
import { NodeEnviornments } from '../my-configs/constants/my-configs.constants';

@Injectable()
export class MyCronsService {
  private logger: Logger = new Logger(MyCronsService.name);
  private crons: string[] = [];

  constructor(
    private readonly myConfigService: MyConfigsService,
    @Inject(SchedulerRegistry)
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  public isCronEnvironment(): boolean {
    return this.myConfigService.isNodeEnv(NodeEnviornments.cron);
  }

  public registerCron(
    name: string,
    intervalTime: CronExpression | string,
    callback: () => Promise<void> | void,
  ) {
    const job = this.wrapCron(intervalTime, callback);
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.crons.push(name);
  }

  protected async logCronError(error: Error): Promise<void> {
    this.logger.error(error.message, error.stack);
  }

  protected wrapCron(
    intervalTime: CronExpression | string,
    callback: () => Promise<void> | void,
  ): CronJob {
    return new CronJob(intervalTime, async () => {
      try {
        await callback();
      } catch (error) {
        this.logCronError(error);
      }
    });
  }
}
