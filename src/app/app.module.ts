import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WeatherModule} from "../features/weather";
import {ENV_CONFIG, environment} from "../environments";
import {INITIALIZE_DICTIONARIES} from "../dictionaries";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule
  ],
  providers: [
    INITIALIZE_DICTIONARIES,
    {
      provide: ENV_CONFIG,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
