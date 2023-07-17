import { TestBed } from '@angular/core/testing';

import { SizeValidationService } from './size-validation.service';

describe('SizeValidationService', () => {
  let service: SizeValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
