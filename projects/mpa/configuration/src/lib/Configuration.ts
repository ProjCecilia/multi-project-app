export interface ApiConfiguration {
  url: string;
  retryTimes: number;
  timeout: number;
}

export interface Configuration {
  api:  ApiConfiguration;
  appVersion: string;
}