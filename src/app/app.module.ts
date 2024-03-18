import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WeatherModule} from "../features/weather";
import {ENV_CONFIG, environment} from "../environments";
import {INITIALIZE_DICTIONARIES} from "../dictionaries";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorCatchingInterceptor} from "../core/interceptors";


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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
