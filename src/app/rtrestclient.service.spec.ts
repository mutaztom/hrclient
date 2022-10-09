import { TestBed } from '@angular/core/testing';

import { RtrestclientService } from './rtrestclient.service';

describe('RtrestclientService', () => {
  let service: RtrestclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtrestclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
