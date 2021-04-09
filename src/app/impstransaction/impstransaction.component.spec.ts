import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpstransactionComponent } from './impstransaction.component';

describe('ImpstransactionComponent', () => {
  let component: ImpstransactionComponent;
  let fixture: ComponentFixture<ImpstransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpstransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpstransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
