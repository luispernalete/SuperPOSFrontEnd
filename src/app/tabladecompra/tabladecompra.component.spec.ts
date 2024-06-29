import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladecompraComponent } from './tabladecompra.component';

describe('TabladecompraComponent', () => {
  let component: TabladecompraComponent;
  let fixture: ComponentFixture<TabladecompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabladecompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabladecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
