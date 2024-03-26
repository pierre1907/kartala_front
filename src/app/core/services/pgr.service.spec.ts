import { TestBed } from '@angular/core/testing';

import { PgrService } from './pgr.service';

describe('PgrService', () => {
  let service: PgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
