import { Test, TestingModule } from '@nestjs/testing';
import { MyConfigsService } from './my-configs.service';

describe('MyConfigsService', () => {
  let service: MyConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyConfigsService],
    }).compile();

    service = module.get<MyConfigsService>(MyConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
