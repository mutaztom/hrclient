import { TestBed } from '@angular/core/testing';

import { RtsecurityService } from './rtsecurity.service';

describe('RtsecurityService', () => {
  let service: RtsecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtsecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
