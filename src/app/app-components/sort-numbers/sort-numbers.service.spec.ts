import { TestBed } from '@angular/core/testing';

import { SortNumbersService } from './sort-numbers.service';

describe('SortNumbersService', () => {
  let service: SortNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
