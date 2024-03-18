import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherManageService} from "../../data/weather-manage.service";
import {asapScheduler, Observable} from "rxjs";
import {WeatherModel} from "../../data/weather.model";

@Component({
  selector: 'app-weather-wrapper',
  templateUrl: './weather-wrapper.component.html',
  styleUrls: ['./weather-wrapper.component.scss']
})
export class WeatherWrapperComponent implements OnInit, OnDestroy{

  public weatherModel$:Observable<WeatherModel[]> = this.weatherManageService.weatherModel$()

  constructor(private weatherManageService: WeatherManageService) {
  }

  public ngOnInit():void {
    this.weatherManageService.getWeather()
  }

  public redirect(id:number):void {
    this.weatherManageService.redirect(id)
  }

  public ngOnDestroy() {
    this.weatherManageService.unsubscribe()
  }
}


