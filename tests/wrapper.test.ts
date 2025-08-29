import { Profile } from '../src/wrapper/profile';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// Mock fs module
jest.mock('fs');
const mockedFs = fs as jest.Mocked<typeof fs>;

// Mock path module
jest.mock('path');
const mockedPath = path as jest.Mocked<typeof path>;

// Mock os module
jest.mock('os');
const mockedOs = os as jest.Mocked<typeof os>;

describe('Profile', () => {
  let profile: Profile;
  const mockHomeDir = '/mock/home';
  const mockGboxHome = '/mock/gbox/home';
  const mockProfilePath = '/mock/gbox/home/profiles.toml';

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock os.homedir()
    mockedOs.homedir.mockReturnValue(mockHomeDir);

    // Mock path.join
    mockedPath.join.mockImplementation((...args) => args.join('/'));

    // Reset environment variables
    delete process.env['GBOX_HOME'];

    profile = new Profile();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    test('should use GBOX_HOME environment variable when set', () => {
      process.env['GBOX_HOME'] = mockGboxHome;
      const profileWithEnv = new Profile();
      expect((profileWithEnv as any).profilePath).toBe(mockProfilePath);
    });

    test('should fallback to default path when GBOX_HOME is not set', () => {
      const profileWithoutEnv = new Profile();
      expect((profileWithoutEnv as any).profilePath).toBe(`${mockHomeDir}/.gbox/profiles.toml`);
    });
  });

  describe('load', () => {
    test('should return null when profile file does not exist', () => {
      mockedFs.existsSync.mockReturnValue(false);
      const result = profile.load();
      expect(result).toBeNull();
    });

    test('should return null when profile file cannot be read', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockImplementation(() => {
        throw new Error('File read error');
      });

      const result = profile.load();
      expect(result).toBeNull();
    });

    test('should return null when profile file contains invalid TOML', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue('invalid toml content');

      const result = profile.load();
      expect(result).toBeNull();
    });

    test('should return parsed profile config when file is valid', () => {
      const validToml = `
        [profiles.default]
        org = "test-org"
        key = "test-key"
        base_url = "https://test.example.com"
        
        [profiles.production]
        org = "prod-org"
        key = "prod-key"
        
        [defaults]
        base_url = "https://default.example.com"
      `;

      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(validToml);

      const result = profile.load();
      expect(result).toEqual({
        profiles: {
          default: {
            org: 'test-org',
            key: 'test-key',
            base_url: 'https://test.example.com',
          },
          production: {
            org: 'prod-org',
            key: 'prod-key',
            base_url: undefined,
          },
        },
        defaults: {
          base_url: 'https://default.example.com',
        },
      });
    });
  });

  describe('getAPIKey', () => {
    test('should return first available API key from profiles', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'a2V5MQ==' }, // base64 encoded "key1"
          profile2: { org: 'org2', key: 'a2V5Mg==' }, // base64 encoded "key2"
        },
        defaults: {},
      };

      // Mock the load method and set the config directly
      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);
      (profile as any).config = mockConfig;

      const result = profile.getAPIKey();
      expect(result).toBe('key1');
    });

    test('should return null when no profiles exist', () => {
      jest.spyOn(profile, 'load').mockReturnValue(null);

      const result = profile.getAPIKey();
      expect(result).toBeNull();
    });

    test('should return null when profiles have no keys', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: '' },
        },
        defaults: {},
      };

      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);

      const result = profile.getAPIKey();
      expect(result).toBeNull();
    });
  });

  describe('getBaseURL', () => {
    test('should return first available base URL from profiles', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'key1', base_url: 'https://profile1.example.com' },
          profile2: { org: 'org2', key: 'key2', base_url: 'https://profile2.example.com' },
        },
        defaults: {},
      };

      // Mock the load method and set the config directly
      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);
      (profile as any).config = mockConfig;

      const result = profile.getBaseURL();
      expect(result).toBe('https://profile1.example.com');
    });

    test('should return default base URL when no profile has base_url', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'key1' },
        },
        defaults: {
          base_url: 'https://default.example.com',
        },
      };

      // Mock the load method and set the config directly
      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);
      (profile as any).config = mockConfig;

      const result = profile.getBaseURL();
      expect(result).toBe('https://default.example.com');
    });

    test('should return null when no base URL is available', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'key1' },
        },
        defaults: {},
      };

      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);

      const result = profile.getBaseURL();
      expect(result).toBeNull();
    });
  });

  describe('buildClientOptions', () => {
    const mockLogger = {
      error: jest.fn(),
      warn: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
    };

    beforeEach(() => {
      // Reset environment variables
      delete process.env['GBOX_API_KEY'];
      delete process.env['GBOX_CLIENT_BASE_URL'];
      delete process.env['GBOX_BASE_URL'];
    });

    test('should prioritize user options over environment variables and profile', () => {
      const userOptions = {
        apiKey: 'user-api-key',
        baseURL: 'https://user.example.com',
        logger: mockLogger,
        logLevel: 'info' as const,
      };

      process.env['GBOX_API_KEY'] = 'env-api-key';
      process.env['GBOX_CLIENT_BASE_URL'] = 'https://env.example.com';

      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'profile-api-key', base_url: 'https://profile.example.com' },
        },
        defaults: {},
      };

      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);

      const result = profile.buildClientOptions(userOptions);

      expect(result.apiKey).toBe('user-api-key');
      expect(result.baseURL).toBe('https://user.example.com');
      expect(result.logger).toBe(mockLogger);
      expect(result.logLevel).toBe('info');
    });

    test('should use GBOX_API_KEY environment variable when apiKey not provided', () => {
      process.env['GBOX_API_KEY'] = 'env-api-key';

      const result = profile.buildClientOptions({ logger: mockLogger, logLevel: 'info' });

      expect(result.apiKey).toBe('env-api-key');
      expect(mockLogger.info).toHaveBeenCalledWith('Using API key from environment variable GBOX_API_KEY');
    });

    test('should use profile API key when neither user option nor environment variable is provided', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'cHJvZmlsZS1hcGkta2V5' }, // base64 encoded "profile-api-key"
        },
        defaults: {},
      };

      // Mock the load method and set the config directly
      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);
      (profile as any).config = mockConfig;

      const result = profile.buildClientOptions({ logger: mockLogger, logLevel: 'info' });

      expect(result.apiKey).toBe('profile-api-key');
      expect(mockLogger.info).toHaveBeenCalledWith('Using API key from profile file');
    });

    test('should prioritize GBOX_CLIENT_BASE_URL over GBOX_BASE_URL', () => {
      process.env['GBOX_CLIENT_BASE_URL'] = 'https://client.example.com';
      process.env['GBOX_BASE_URL'] = 'https://base.example.com';

      const result = profile.buildClientOptions({ logger: mockLogger, logLevel: 'info' });

      expect(result.baseURL).toBe('https://client.example.com');
      expect(mockLogger.info).toHaveBeenCalledWith(
        'Using base URL from environment variable GBOX_CLIENT_BASE_URL: https://client.example.com',
      );
    });

    test('should use GBOX_BASE_URL when GBOX_CLIENT_BASE_URL is not set', () => {
      process.env['GBOX_BASE_URL'] = 'https://base.example.com';

      const result = profile.buildClientOptions({ logger: mockLogger, logLevel: 'info' });

      expect(result.baseURL).toBe('https://base.example.com');
      expect(mockLogger.info).toHaveBeenCalledWith(
        'Using base URL from environment variable GBOX_BASE_URL: https://base.example.com',
      );
    });

    test('should use profile base URL when no environment variables are set', () => {
      const mockConfig = {
        profiles: {
          profile1: { org: 'org1', key: 'a2V5MQ==', base_url: 'https://profile.example.com' }, // base64 encoded "key1"
        },
        defaults: {},
      };

      // Mock the load method and set the config directly
      jest.spyOn(profile, 'load').mockReturnValue(mockConfig);
      (profile as any).config = mockConfig;

      const result = profile.buildClientOptions({ logger: mockLogger, logLevel: 'info' });

      expect(result.baseURL).toBe('https://profile.example.com');
      expect(mockLogger.info).toHaveBeenCalledWith(
        'Using base URL from profile file: https://profile.example.com',
      );
    });

    test('should respect log level settings', () => {
      const debugLogger = { ...mockLogger, debug: jest.fn() };

      // Test with debug level - should log debug messages
      profile.buildClientOptions({ logger: debugLogger, logLevel: 'debug' });
      // Note: debug messages are only logged when actual debug operations happen
      // This test verifies the logger is properly configured

      // Test with warn level - should not log debug
      const warnLogger = { ...mockLogger, debug: jest.fn() };
      profile.buildClientOptions({ logger: warnLogger, logLevel: 'warn' });
      expect(warnLogger.debug).not.toHaveBeenCalled();
    });

    test('should use globalThis.console as default logger', () => {
      const result = profile.buildClientOptions({ logLevel: 'info' });

      expect(result.logger).toBe(globalThis.console);
      expect(result.logLevel).toBe('info');
    });

    test('should use warn as default log level', () => {
      const result = profile.buildClientOptions({ logger: mockLogger });

      expect(result.logger).toBe(mockLogger);
      expect(result.logLevel).toBe('warn');
    });
  });

  describe('validateAndTransformConfig', () => {
    test('should return null for invalid parsed data', () => {
      const result = (profile as any).validateAndTransformConfig(null);
      expect(result).toBeNull();
    });

    test('should return null for non-object parsed data', () => {
      const result = (profile as any).validateAndTransformConfig('string');
      expect(result).toBeNull();
    });

    test('should handle profiles with missing required fields', () => {
      const parsed = {
        profiles: {
          valid: { org: 'org1', key: 'key1' },
          invalid: { org: 'org2' }, // missing key
        },
      };

      const result = (profile as any).validateAndTransformConfig(parsed);

      expect(result?.profiles.valid).toBeDefined();
      expect(result?.profiles.invalid).toBeUndefined();
    });

    test('should handle empty profiles object', () => {
      const parsed = { profiles: {} };

      const result = (profile as any).validateAndTransformConfig(parsed);

      expect(result?.profiles).toEqual({});
    });

    test('should handle missing defaults section', () => {
      const parsed = { profiles: { profile1: { org: 'org1', key: 'key1' } } };

      const result = (profile as any).validateAndTransformConfig(parsed);

      expect(result?.defaults).toEqual({});
    });
  });
});

describe('GboxSDK', () => {
  test('should create GboxClient with profile-enhanced options', () => {
    // Test that GboxSDK can be instantiated without errors
    // This tests the basic functionality without complex mocking
    expect(() => {
      const { GboxSDK } = require('../src/wrapper/sdk');
      new GboxSDK();
    }).not.toThrow();
  });

  test('should accept user options', () => {
    // Test that GboxSDK can be instantiated with options
    expect(() => {
      const { GboxSDK } = require('../src/wrapper/sdk');
      new GboxSDK({
        apiKey: 'test-key',
        baseURL: 'https://test.example.com',
        logLevel: 'info',
      });
    }).not.toThrow();
  });

  test('should have client property', () => {
    // Test that the client property exists and is accessible
    const { GboxSDK } = require('../src/wrapper/sdk');
    const sdk = new GboxSDK();

    expect(sdk.client).toBeDefined();
    expect(typeof sdk.client).toBe('object');
  });
});
