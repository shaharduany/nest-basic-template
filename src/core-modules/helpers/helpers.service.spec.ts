import { Test, TestingModule } from '@nestjs/testing';
import { HelpersService } from './helpers.service';

describe('HelpersService', () => {
  let service: HelpersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpersService],
    }).compile();

    service = module.get<HelpersService>(HelpersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCurrentDateTime', () => {
    it('should return the current date time', () => {
      expect(service.getCurrentDateTime()).toBeDefined();
    });

    it('should return the current date time in the format YYYY-MM-DD HH:mm:ss', () => {
      expect(service.getCurrentDateTime(true)).toMatch(
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
      );
    });

    it('should return the current date time in the format YYYY-MM-DDTHH:mm:ssZ', () => {
      expect(service.getCurrentDateTime(false)).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
      );
    });
  });

  describe('isHashMatch', () => {
    it('should return true if the value matches the hash', async () => {
      const val = 'password';
      const hashedValue = await service.hashValue(val);
      const isMatched = await service.isHashMatch(val, hashedValue);

      expect(isMatched).toBe(true);
    });

    it('should return false if the value does not match the hash', async () => {
      const val = 'password';
      const hashedValue = await service.hashValue(val);
      const isMatched = await service.isHashMatch('wrongPassword', hashedValue);

      expect(isMatched).toBe(false);
    });
  });
});
