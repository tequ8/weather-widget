import { Injectable } from '@angular/core';
import {DictionariesHttpService} from "./dictionaries-http.service";
import {BehaviorSubject, delay, map, Observable, Subject} from "rxjs";
import {CityDictionaries, CityDictionariesDTO} from "./dictionaries.model";

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  private readonly dictForCities: string[] = ['Warsaw', 'London', 'Łódź', 'Berlin', 'New York']

  private dict: CityDictionaries[]= []

  constructor(private dictionariesHttpService:DictionariesHttpService) { }

  public init():Observable<any> {
    return this.dictionariesHttpService.getDicts(this.dictForCities).pipe(map(dictionaries =>
       this.dict = [...this.fromDto(dictionaries)]
    ))
  }

  public getDict():CityDictionaries[] {
    return this.dict
  }


  private fromDto(dictionaries:any):CityDictionaries[] {
    return dictionaries.map((city:CityDictionariesDTO[])=> ({
      name:city[0].name,
      lon:city[0].lon,
      lat:city[0].lat
    }))
  }

}
