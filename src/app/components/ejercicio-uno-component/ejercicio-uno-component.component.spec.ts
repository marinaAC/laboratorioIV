import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioUnoComponentComponent } from './ejercicio-uno-component.component';

describe('EjercicioUnoComponentComponent', () => {
  let component: EjercicioUnoComponentComponent;
  let fixture: ComponentFixture<EjercicioUnoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioUnoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioUnoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
