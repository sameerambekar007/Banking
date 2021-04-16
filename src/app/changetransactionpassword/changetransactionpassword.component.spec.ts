import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangetransactionpasswordComponent } from './changetransactionpassword.component';

describe('ChangetransactionpasswordComponent', () => {
  let component: ChangetransactionpasswordComponent;
  let fixture: ComponentFixture<ChangetransactionpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangetransactionpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangetransactionpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
