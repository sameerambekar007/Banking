import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottransactionpasswordComponent } from './forgottransactionpassword.component';

describe('ForgottransactionpasswordComponent', () => {
  let component: ForgottransactionpasswordComponent;
  let fixture: ComponentFixture<ForgottransactionpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgottransactionpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottransactionpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
