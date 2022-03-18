import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesAvailableComponent } from './vehicles-available.component';

describe('VehiclesAvailableComponent', () => {
  let component: VehiclesAvailableComponent;
  let fixture: ComponentFixture<VehiclesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
