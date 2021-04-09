import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterforibComponent } from './registerforib.component';

describe('RegisterforibComponent', () => {
  let component: RegisterforibComponent;
  let fixture: ComponentFixture<RegisterforibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterforibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterforibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
