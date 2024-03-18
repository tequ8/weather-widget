import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherModel} from "../../data/weather.model";

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherItemComponent {

  // nazwa miasta
  // pogoda/opis
  // temperatura
  // id
  // icona
  //

  @Input() public isLoading:boolean = false
  @Input() public city: WeatherModel

  @Output() public redirectClick: EventEmitter<number> = new EventEmitter<number>()


  public redirect (id:number): void {
    console.log(id)
    this.redirectClick.emit(id)
  }
}
