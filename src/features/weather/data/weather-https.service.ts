import {Inject, Injectable} from '@angular/core';
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ENV_CONFIG, EnvConfig} from "../../../environments";
import {WeatherModel} from "./weather.model";
import {CityDictionaries, CityDictionariesDTO} from "../../../dictionaries";
import {adapterWeatherModel} from "./weather.adapter";

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpsService {
  private readonly url: string = `https://api.openweathermap.org/data/2.5/weather?appid=${this.envConfig.apiKeyWeather}&units=metric`

  constructor(
    @Inject(ENV_CONFIG) private envConfig: EnvConfig,
    private httpClient: HttpClient) { }

  public getWeather(cities:CityDictionaries[]):Observable<WeatherModel[]> {
    return forkJoin(cities.map((city:CityDictionaries)=>
      this.httpClient.get<any>(`${this.url}&lat=${city.lat}&lon=${city.lon}`).pipe(map((weather)=>
        adapterWeatherModel(weather)))))
  }
}
