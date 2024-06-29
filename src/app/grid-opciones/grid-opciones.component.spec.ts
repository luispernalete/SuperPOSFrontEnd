import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOpcionesComponent } from './grid-opciones.component';

describe('GridOpcionesComponent', () => {
  let component: GridOpcionesComponent;
  let fixture: ComponentFixture<GridOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridOpcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
