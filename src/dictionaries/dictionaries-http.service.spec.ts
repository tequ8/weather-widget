import { TestBed } from '@angular/core/testing';

import { DictionariesHttpService } from './dictionaries-http.service';

describe('DictionariesHttpService', () => {
  let service: DictionariesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionariesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
