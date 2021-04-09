import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgstransactionComponent } from './rtgstransaction.component';

describe('RtgstransactionComponent', () => {
  let component: RtgstransactionComponent;
  let fixture: ComponentFixture<RtgstransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgstransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgstransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
