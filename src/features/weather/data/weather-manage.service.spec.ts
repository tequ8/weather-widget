import { TestBed } from '@angular/core/testing';

import { WeatherManageService } from './weather-manage.service';

describe('WeatherManageService', () => {
  let service: WeatherManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
