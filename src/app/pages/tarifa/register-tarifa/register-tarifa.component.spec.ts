import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTarifaComponent } from './register-tarifa.component';

describe('RegisterTarifaComponent', () => {
  let component: RegisterTarifaComponent;
  let fixture: ComponentFixture<RegisterTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTarifaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
