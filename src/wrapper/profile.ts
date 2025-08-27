import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { parse } from 'smol-toml';
import { readEnv } from '../internal/utils/env';
import type { Logger, LogLevel } from '../internal/utils/log';

export interface ProfileData {
  org: string;
  key: string;
  base_url?: string | undefined;
}

export interface ProfileConfig {
  profiles: Record<string, ProfileData>;
  defaults?: {
    base_url?: string | undefined;
  };
}

export interface ProfileOptions {
  apiKey?: string | undefined;
  baseURL?: string | null | undefined;
  logger?: Logger | undefined;
  logLevel?: LogLevel | undefined;
}

/**
 * Simple profile reader for gbox profile configuration
 * Read-only implementation using smol-toml for parsing
 */
export class Profile {
  private config: ProfileConfig | null = null;
  private profilePath: string;

  constructor() {
    // Profile path priority: GBOX_HOME env > default (~/.gbox/profiles.toml)
    const gboxHome = process.env['GBOX_HOME'] || path.join(os.homedir(), '.gbox');
    this.profilePath = path.join(gboxHome, 'profiles.toml');
  }

  /**
   * Load profiles from the profile file
   */
  load(): ProfileConfig | null {
    try {
      if (!fs.existsSync(this.profilePath)) {
        return null;
      }

      const data = fs.readFileSync(this.profilePath, 'utf8');
      if (!data.trim()) {
        return null;
      }

      // Use smol-toml to parse the TOML file
      const parsed = parse(data);
      this.config = this.validateAndTransformConfig(parsed);
      return this.config;
    } catch (error) {
      console.warn(`Failed to load profile file: ${error}`);
      return null;
    }
  }

  /**
   * Get API key from the first available profile
   */
  getAPIKey(): string | null {
    if (!this.config) {
      this.load();
    }

    if (!this.config || !this.config.profiles) {
      return null;
    }

    // Get the first profile with an API key
    for (const profile of Object.values(this.config.profiles)) {
      if (profile && profile.key) {
        try {
          // Decode base64 encoded API key
          return Buffer.from(profile.key, 'base64').toString('utf8');
        } catch (error) {
          console.warn(`Failed to decode API key: ${error}`);
          continue;
        }
      }
    }

    return null;
  }

  /**
   * Get base URL from the first available profile or defaults
   */
  getBaseURL(): string | null {
    if (!this.config) {
      this.load();
    }

    if (!this.config) {
      return null;
    }

    // First try to get from profiles
    for (const profile of Object.values(this.config.profiles)) {
      if (profile && profile.base_url) {
        return profile.base_url;
      }
    }

    // Fall back to defaults
    return this.config.defaults?.base_url || null;
  }

  /**
   * Build client options with priority:
   * 1. User-provided options (highest priority)
   * 2. Environment variables (GBOX_CLIENT_BASE_URL > GBOX_BASE_URL)
   * 3. Profile file values (lowest priority)
   */
  buildClientOptions(userOptions?: ProfileOptions): ProfileOptions {
    const profile = this.load();
    const options: ProfileOptions = { ...userOptions };

    // Get logger and logLevel from userOptions or defaults
    const logger = loggerForProfile(userOptions);
    const logLevel = userOptions?.logLevel || 'warn';

    // API Key priority: userOptions > GBOX_API_KEY env > profile
    if (!options.apiKey) {
      const envApiKey = readEnv('GBOX_API_KEY');
      if (envApiKey) {
        logger.info(`Using API key from environment variable GBOX_API_KEY`);
        options.apiKey = envApiKey;
      } else if (profile) {
        const profileApiKey = this.getAPIKey();
        if (profileApiKey) {
          logger.info(`Using API key from profile file`);
          options.apiKey = profileApiKey;
        }
      }
    }

    // Base URL priority: userOptions > GBOX_CLIENT_BASE_URL env > GBOX_BASE_URL env > profile > default
    if (!options.baseURL) {
      // Try GBOX_CLIENT_BASE_URL first (higher priority)
      const clientBaseURL = readEnv('GBOX_CLIENT_BASE_URL');
      if (clientBaseURL) {
        logger.info(`Using base URL from environment variable GBOX_CLIENT_BASE_URL: ${clientBaseURL}`);
        options.baseURL = clientBaseURL;
      } else {
        // Try GBOX_BASE_URL as fallback
        const baseURL = readEnv('GBOX_BASE_URL');
        if (baseURL) {
          logger.info(`Using base URL from environment variable GBOX_BASE_URL: ${baseURL}`);
          options.baseURL = baseURL;
        } else if (profile) {
          const profileBaseURL = this.getBaseURL();
          if (profileBaseURL) {
            logger.info(`Using base URL from profile file: ${profileBaseURL}`);
            options.baseURL = profileBaseURL;
          }
        }
      }
    }

    // Ensure logger and logLevel are included in the result
    return {
      ...options,
      logger: userOptions?.logger || globalThis.console,
      logLevel: logLevel,
    };
  }

  /**
   * Validate and transform parsed TOML data to ProfileConfig
   */
  private validateAndTransformConfig(parsed: any): ProfileConfig | null {
    try {
      // Ensure the parsed data has the expected structure
      if (!parsed || typeof parsed !== 'object') {
        return null;
      }

      const config: ProfileConfig = {
        profiles: {},
        defaults: {},
      };

      // Extract profiles
      if (parsed.profiles && typeof parsed.profiles === 'object') {
        for (const [key, profile] of Object.entries(parsed.profiles)) {
          if (profile && typeof profile === 'object' && 'org' in profile && 'key' in profile) {
            const profileData = profile as any;
            config.profiles[key] = {
              org: String(profileData.org || ''),
              key: String(profileData.key || ''),
              base_url: profileData.base_url ? String(profileData.base_url) : undefined,
            };
          }
        }
      }

      // Extract defaults
      if (parsed.defaults && typeof parsed.defaults === 'object' && 'base_url' in parsed.defaults) {
        const defaults = parsed.defaults as any;
        config.defaults = {
          base_url: defaults.base_url ? String(defaults.base_url) : undefined,
        };
      }

      return config;
    } catch (error) {
      console.warn(`Failed to validate profile config: ${error}`);
      return null;
    }
  }
}

function loggerForProfile({
  logger,
  logLevel,
}: {
  logger?: Logger | undefined;
  logLevel?: LogLevel | undefined;
} = {}): Logger {
  const effectiveLogger = logger || (globalThis as any).console;
  const effectiveLogLevel = logLevel || 'warn';

  // Simple level checking
  const shouldLog = (level: keyof Logger): boolean => {
    if (effectiveLogLevel === 'off') return false;
    if (effectiveLogLevel === 'error' && level !== 'error') return false;
    if (effectiveLogLevel === 'warn' && (level === 'info' || level === 'debug')) return false;
    if (effectiveLogLevel === 'info' && level === 'debug') return false;
    return true;
  };

  return {
    error: shouldLog('error') ? effectiveLogger.error?.bind(effectiveLogger) || (() => {}) : () => {},
    warn: shouldLog('warn') ? effectiveLogger.warn?.bind(effectiveLogger) || (() => {}) : () => {},
    info: shouldLog('info') ? effectiveLogger.info?.bind(effectiveLogger) || (() => {}) : () => {},
    debug: shouldLog('debug') ? effectiveLogger.debug?.bind(effectiveLogger) || (() => {}) : () => {},
  };
}
