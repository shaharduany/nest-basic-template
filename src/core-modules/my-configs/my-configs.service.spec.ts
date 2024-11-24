import { Test, TestingModule } from '@nestjs/testing';
import { MyConfigsService } from './my-configs.service';
import { getMyConfigsModuleMetadata } from './my-configs.module';

describe('MyConfigsService', () => {
  let service: MyConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      getMyConfigsModuleMetadata(),
    ).compile();

    service = module.get<MyConfigsService>(MyConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPort', () => {
    it('should return the port number', () => {
      expect(service.getPort()).toBeDefined();
    });

    it('should return a number', () => {
      expect(typeof service.getPort()).toBe('number');
    });
  });

  describe('getSqlDatabaseConfig', () => {
    it('should return the sql database config', () => {
      expect(service.getSqlDatabaseConfig()).toBeDefined();
    });

    it('should return an object', () => {
      expect(typeof service.getSqlDatabaseConfig()).toBe('object');
    });

    it('should return an object with the correct properties', () => {
      const sqlDatabaseConfig = service.getSqlDatabaseConfig();
      expect(sqlDatabaseConfig).toHaveProperty('type');
      expect(sqlDatabaseConfig).toHaveProperty('host');
      expect(sqlDatabaseConfig).toHaveProperty('port');
      expect(sqlDatabaseConfig).toHaveProperty('username');
      expect(sqlDatabaseConfig).toHaveProperty('password');
      expect(sqlDatabaseConfig).toHaveProperty('database');
    });
  });

  describe('getMongoDatabaseConfig', () => {
    it('should return the mongo database config', () => {
      expect(service.getMongoDatabaseConfig()).toBeDefined();
    });

    it('should return an object', () => {
      const mongoDatabaseConfig = service.getMongoDatabaseConfig();
      expect(typeof mongoDatabaseConfig).toBe('object');
    });

    it('should return an object with the correct properties', () => {
      const mongoDatabaseConfig = service.getMongoDatabaseConfig();
      expect(mongoDatabaseConfig).toHaveProperty('uri');
    });
  });

  describe('getInternalDomains', () => {
    it('should return the internal domains', () => {
      expect(service.getInternalDomains()).toBeDefined();
    });

    it('should return an array of strings', () => {
      const internalDomains = service.getInternalDomains();
      const isArray = Array.isArray(internalDomains);
      expect(isArray).toBe(true);
    });

    it('should return array of trimmed strings', () => {
      const internalDomains = service.getInternalDomains();
      const isTrimmed = internalDomains.every(
        (domain) => domain.trim() === domain,
      );
      expect(isTrimmed).toBe(true);
    });
  });
});
