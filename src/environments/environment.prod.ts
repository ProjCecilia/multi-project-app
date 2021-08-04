import { AppConfig } from "../configs/app.config.production";

export const config = new AppConfig();

export const environment = {
  config,
  production: true
};
