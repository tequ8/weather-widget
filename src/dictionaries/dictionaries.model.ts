export interface CityDictionariesDTO {
  readonly country:string;
  readonly lat:number;
  readonly lon:number;
  readonly name:string;
  readonly state:string;
  readonly local_names:Object;
}

export interface CityDictionaries {
  readonly name:string;
  readonly lat:string;
  readonly lon:string;
}
