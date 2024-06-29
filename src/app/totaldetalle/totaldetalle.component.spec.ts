import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldetalleComponent } from './totaldetalle.component';

describe('TotaldetalleComponent', () => {
  let component: TotaldetalleComponent;
  let fixture: ComponentFixture<TotaldetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotaldetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotaldetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
