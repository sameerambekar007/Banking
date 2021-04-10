import { TestBed } from '@angular/core/testing';

import { BankingService } from './banking.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


describe('BankingService', () => {
  let service: BankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
