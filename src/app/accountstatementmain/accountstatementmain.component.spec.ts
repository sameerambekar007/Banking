import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountstatementmainComponent } from './accountstatementmain.component';

describe('AccountstatementmainComponent', () => {
  let component: AccountstatementmainComponent;
  let fixture: ComponentFixture<AccountstatementmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountstatementmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountstatementmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
