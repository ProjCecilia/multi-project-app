import { AppConfig } from "../configs/app.config.production";

export const appConfig = new AppConfig();

export const environment = {
  appConfig,
  production: true
};
