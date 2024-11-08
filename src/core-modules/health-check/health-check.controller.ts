import { Controller, Get, Inject } from '@nestjs/common';
import { IHealthCheckResponse } from './interfaces/response.interface';
import { HelpersService } from '../helpers/helpers.service';

@Controller('health-check')
export class HealthCheckController {
  constructor(
    @Inject(HelpersService)
    private readonly helpersService: HelpersService,
  ) {}

  @Get()
  public healthCheck(): IHealthCheckResponse {
    return { status: 'Alive', time: this.helpersService.getCurrentDateTime() };
  }
}
