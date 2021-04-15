import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidtranspasswordComponent } from './invalidtranspassword.component';

describe('InvalidtranspasswordComponent', () => {
  let component: InvalidtranspasswordComponent;
  let fixture: ComponentFixture<InvalidtranspasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidtranspasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidtranspasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
