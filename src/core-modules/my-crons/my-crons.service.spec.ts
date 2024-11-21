import { Test, TestingModule } from '@nestjs/testing';
import { MyCronsService } from './my-crons.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MyConfigsModule } from '../my-configs/my-configs.module';

describe('MyCronsService', () => {
  let service: MyCronsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MyConfigsModule, ScheduleModule.forRoot()],
      providers: [MyCronsService],
      exports: [MyCronsService],
    }).compile();

    service = module.get<MyCronsService>(MyCronsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
