import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTravellerComponent } from './co-traveller.component';

describe('CoTravellerComponent', () => {
  let component: CoTravellerComponent;
  let fixture: ComponentFixture<CoTravellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoTravellerComponent]
    });
    fixture = TestBed.createComponent(CoTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
