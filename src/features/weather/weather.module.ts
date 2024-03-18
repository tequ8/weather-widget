import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWrapperComponent } from './ui/weather-wrapper/weather-wrapper.component';
import { WeatherItemComponent } from './ui/weather-item/weather-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    WeatherWrapperComponent,
    WeatherItemComponent,
  ],
  exports: [
    WeatherWrapperComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
