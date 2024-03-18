import { Injectable } from '@angular/core';
import {
  BehaviorSubject, interval,
  Observable, Subject,
  switchMap, takeUntil,
  tap
} from "rxjs";
import {WeatherHttpsService} from "./weather-https.service";
import {CityDictionaries, DictionariesService} from "../../../dictionaries";
import {WeatherModel} from "./weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherManageService {
  public refresh$: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)

  public cityDictionaries$$: BehaviorSubject<CityDictionaries[]> = new BehaviorSubject<CityDictionaries[]>([])

  public weatherModelObservable$: Observable<WeatherModel[]> = this.refresh$.pipe(switchMap(()=> {
    const cityDictionaries:CityDictionaries[] = this.cityDictionaries$$.getValue()
    return this.weatherHttpsService.getWeather(cityDictionaries)
  }))

  private unsubscribe$:Subject<void> = new Subject();

  private THREE_ITEM:number = 3;
  private TEEN_SECONDS: number = 10000; // 10s
  private ONE_MINUTE: number = 60000; // 1min

  constructor(private weatherHttpsService:WeatherHttpsService,
              private dictionariesService:DictionariesService) {


    interval(this.ONE_MINUTE).pipe(takeUntil(this.unsubscribe$)).subscribe(()=> {
      this.cityDictionaries$$.next(this.randomCities(this.dictionariesService.getDict()))
    })


    interval((this.TEEN_SECONDS)).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.refresh$.next()
    })
  }

  public weatherModel$():Observable<WeatherModel[]> {
    return this.weatherModelObservable$
  }

  public getWeather():void {
    this.cityDictionaries$$.next(this.randomCities(this.dictionariesService.getDict()))
    this.refresh$.next()
  }


  public redirect(id:number):void {
    window.open(`https://openweathermap.org/city/${id}`, "_blank");
  }

  public unsubscribe():void {
    this.unsubscribe$.unsubscribe()
    this.unsubscribe$.complete();
  }

  private randomCities(cityDictionaries:CityDictionaries[]):CityDictionaries[] {
    const shuffled:CityDictionaries[] = [...cityDictionaries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, this.THREE_ITEM)
  }

}
