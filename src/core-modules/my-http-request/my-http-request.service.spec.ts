import { Test, TestingModule } from '@nestjs/testing';
import { MyHttpRequestService } from './my-http-request.service';
import { getMyHttpRequestModuleMetadata } from './my-http-request.module';

describe('MyHttpRequestService', () => {
  let service: MyHttpRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      getMyHttpRequestModuleMetadata(),
    ).compile();

    service = module.get<MyHttpRequestService>(MyHttpRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
