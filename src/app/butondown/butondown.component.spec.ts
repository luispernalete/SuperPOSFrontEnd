import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButondownComponent } from './butondown.component';

describe('ButondownComponent', () => {
  let component: ButondownComponent;
  let fixture: ComponentFixture<ButondownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButondownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButondownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
