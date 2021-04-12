import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountstatusmainComponent } from './accountstatusmain.component';

describe('AccountstatusmainComponent', () => {
  let component: AccountstatusmainComponent;
  let fixture: ComponentFixture<AccountstatusmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountstatusmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountstatusmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
