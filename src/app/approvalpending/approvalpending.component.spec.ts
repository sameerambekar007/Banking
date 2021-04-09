import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalpendingComponent } from './approvalpending.component';

describe('ApprovalpendingComponent', () => {
  let component: ApprovalpendingComponent;
  let fixture: ComponentFixture<ApprovalpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
