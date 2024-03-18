import {DictionariesService} from "./dictionaries.service";
import {APP_INITIALIZER} from "@angular/core";

export function initializeDictionaries(dictionariesService:DictionariesService):Function {
  return () => dictionariesService.init()
}


export const INITIALIZE_DICTIONARIES = {
  provide: APP_INITIALIZER,
  useFactory: initializeDictionaries,
  deps: [DictionariesService],
  multi: true
}
