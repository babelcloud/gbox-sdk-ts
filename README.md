# Gbox TypeScript SDK

[![NPM version](https://img.shields.io/npm/v/gbox-sdk.svg)](https://npmjs.org/package/gbox-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/gbox-sdk)

This library provides convenient access to the Gbox API from TypeScript or JavaScript.

[Documentation](https://docs.gbox.cloud/api-reference)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Quick Start](#quick-start)
- [Handling errors](#handling-errors)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
- [Advanced Usage](#advanced-usage)
  - [Logging](#logging)
    - [Log levels](#log-levels)
    - [Custom logger](#custom-logger)
  - [Customizing the fetch client](#customizing-the-fetch-client)
  - [Fetch options](#fetch-options)
    - [Configuring proxies](#configuring-proxies)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Semantic versioning](#semantic-versioning)
- [Requirements](#requirements)
- [Contributing](#contributing)

## Installation

```sh
npm install gbox-sdk
```

## Usage

<!-- prettier-ignore -->
```js
import GboxSDK from 'gbox-sdk';

const gboxSDK = new GboxSDK({
  apiKey: process.env['GBOX_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const box = await gboxSDK.create({type: 'android'})
}

main();
```

## Quick Start

```ts
const box = await gboxSDK.create({ type: 'android' });

// box.config is the config of the box (e.g. OS version, screen size, etc.)
console.log(box.config);
```

## File uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import GboxClient, { toFile } from 'gbox-sdk';

const client = new GboxClient();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
  apk: fs.createReadStream('/path/to/file'),
});

// Or if you have the web `File` API you can pass a `File` instance:
await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
  apk: new File(['my bytes'], 'file'),
});

// You can also pass a `fetch` `Response`:
await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
  apk: await fetch('https://somesite/file'),
});

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
  apk: await toFile(Buffer.from('my bytes'), 'file'),
});
await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
  apk: await toFile(new Uint8Array([0, 1, 2]), 'file'),
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
async function main() {
  const box = await gboxSDK.create({ type: 'android' }).catch(async (err) => {
    if (err instanceof GboxSDK.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
}

main();
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const gboxSDK = new GboxSDK({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await gboxSDK.create({ type: 'android' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const gboxSDK = new GboxSDK({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await gboxSDK.create({ type: 'linux' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `GBOX_CLIENT_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import GboxSDK from 'gbox-sdk';

const gboxSDK = new GboxSDK({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import GboxSDK from 'gbox-sdk';
import pino from 'pino';

const logger = pino();

const gboxSDK = new GboxSDK({
  logger: logger.child({ name: 'GboxClient' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import GboxSDK from 'gbox-sdk';
import fetch from 'my-fetch';

const gboxSDK = new GboxSDK({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import GboxSDK from 'gbox-sdk';

const gboxSDK = new GboxSDK({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import GboxSDK from 'gbox-sdk';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const gboxSDK = new GboxSDK({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import GboxSDK from 'gbox-sdk';

const gboxSDK = new GboxSDK({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import GboxSDK from 'npm:gbox-sdk';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const gboxSDK = new GboxSDK({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/babelcloud/gbox-sdk-ts/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
