import {InjectionToken} from "@angular/core";

export interface EnvConfig {
  readonly apiKeyWeather:string
}


export const ENV_CONFIG: InjectionToken<EnvConfig> = new InjectionToken<EnvConfig>('ENV_CONFIG')
