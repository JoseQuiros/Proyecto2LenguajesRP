import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParkingComponent } from './register-parking.component';

describe('RegisterParkingComponent', () => {
  let component: RegisterParkingComponent;
  let fixture: ComponentFixture<RegisterParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
