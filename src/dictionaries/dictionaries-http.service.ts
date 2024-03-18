import {Inject, Injectable} from '@angular/core';
import {forkJoin, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ENV_CONFIG, EnvConfig} from "../environments";
import {CityDictionariesDTO} from "./dictionaries.model";

@Injectable({
  providedIn: 'root'
})
export class DictionariesHttpService {
  private readonly url: string = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${this.envConfig.apiKeyWeather}`

  constructor(
    @Inject(ENV_CONFIG) private envConfig: EnvConfig,
    private httpClient: HttpClient
  ) { }

  public getDicts(cities:string[]):Observable<any> {
    return forkJoin(cities.map((city:string)=>
      this.httpClient.get<CityDictionariesDTO>(`${this.url}&q=${city}`)))
  }
}
