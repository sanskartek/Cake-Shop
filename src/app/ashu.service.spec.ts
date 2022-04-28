import { TestBed } from '@angular/core/testing';

import { AshuService } from './ashu.service';

describe('AshuService', () => {
  let service: AshuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AshuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
