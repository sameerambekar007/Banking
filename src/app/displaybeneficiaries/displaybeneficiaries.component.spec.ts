import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybeneficiariesComponent } from './displaybeneficiaries.component';

describe('DisplaybeneficiariesComponent', () => {
  let component: DisplaybeneficiariesComponent;
  let fixture: ComponentFixture<DisplaybeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybeneficiariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
