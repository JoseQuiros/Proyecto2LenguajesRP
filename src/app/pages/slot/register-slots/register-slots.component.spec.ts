import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSlotsComponent } from './register-slots.component';

describe('RegisterSlotsComponent', () => {
  let component: RegisterSlotsComponent;
  let fixture: ComponentFixture<RegisterSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
