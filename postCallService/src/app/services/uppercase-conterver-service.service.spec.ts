import { TestBed } from '@angular/core/testing';

import { UppercaseConterverServiceService } from './uppercase-conterver-service.service';

describe('UppercaseConterverServiceService', () => {
  let service: UppercaseConterverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppercaseConterverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
