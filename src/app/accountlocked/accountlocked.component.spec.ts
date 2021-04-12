import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountlockedComponent } from './accountlocked.component';

describe('AccountlockedComponent', () => {
  let component: AccountlockedComponent;
  let fixture: ComponentFixture<AccountlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
