import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftransactionComponent } from './neftransaction.component';

describe('NeftransactionComponent', () => {
  let component: NeftransactionComponent;
  let fixture: ComponentFixture<NeftransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeftransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeftransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
