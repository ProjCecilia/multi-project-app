import { Configuration, ApiConfiguration } from "configuration";

export class AppConfig implements Configuration {
  appVersion = "1.0.0";

  api: ApiConfiguration = {
    url: 'http://url.com',
    timeout: 3000,
    retryTimes: 3
  };
}
