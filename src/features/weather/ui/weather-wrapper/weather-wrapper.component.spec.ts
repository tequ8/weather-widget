import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWrapperComponent } from './weather-wrapper.component';

describe('WeatherWrapperComponent', () => {
  let component: WeatherWrapperComponent;
  let fixture: ComponentFixture<WeatherWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWrapperComponent]
    });
    fixture = TestBed.createComponent(WeatherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
