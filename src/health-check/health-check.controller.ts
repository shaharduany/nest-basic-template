import { Controller, Get } from '@nestjs/common';
import { IHealthCheckResponse } from './interfaces/response.interface';
import { getCurrentDateTime } from '@/common/helpers/datetime';

@Controller('health-check')
export class HealthCheckController {
  @Get('')
  public healthCheck(): IHealthCheckResponse {
    return { status: 'Alive', time: getCurrentDateTime() };
  }
}
