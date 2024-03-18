import { TestBed } from '@angular/core/testing';

import { WeatherHttpsService } from './weather-https.service';

describe('WeatherHttpsService', () => {
  let service: WeatherHttpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherHttpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
