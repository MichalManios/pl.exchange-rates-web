import { TestBed } from '@angular/core/testing';

import { SortNumbersService } from './sort-numbers.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NumbersSorted } from './models/numbers-sorted.interface';
import { NumbersToSort } from './models/numbers-to-sort.interface';
import { OrderType } from './models/order-type.interface';

describe('SortNumbersService', () => {
  let httpTestingController: HttpTestingController;
  let service: SortNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SortNumbersService ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SortNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSortedNumbers should return expected data', (done) => {
    const orderType: OrderType = { 'name': 'ASC' }
    const numbersToSort: NumbersToSort = { 'order': orderType, 'numbers': [10,1,4,3,8,7] }
    const expectedData: NumbersSorted = { 'numbers': [1,3,4,7,9,10] };

    service.getSortedNumbers(numbersToSort).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/numbers/sort-command');

    testRequest.flush(expectedData);
  });

  it('getSortedNumbers should use POST to retrieve data', () => {
    const orderType: OrderType = { 'name': 'ASC' }
    const numbersToSort: NumbersToSort = { 'order': orderType, 'numbers': [10,1,4,3,8,7] }

    service.getSortedNumbers(numbersToSort).subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:8080/numbers/sort-command');

    expect(testRequest.request.method).toEqual('POST');
  });

});
