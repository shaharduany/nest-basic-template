import { Test, TestingModule } from '@nestjs/testing';
import { MyCronsService } from './my-crons.service';
import { getMyCronsModuleMetadata } from './my-crons.module';

describe('MyCronsService', () => {
  let service: MyCronsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      getMyCronsModuleMetadata(),
    ).compile();

    service = module.get<MyCronsService>(MyCronsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
