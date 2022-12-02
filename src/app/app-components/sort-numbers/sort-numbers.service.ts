import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumbersToSort } from './models/numbers-to-sort.interface';
import { Observable } from 'rxjs';
import { NumbersSorted } from './models/numbers-sorted.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SortNumbersService {

  private URL = `${environment.baseUrl}/numbers/sort-command`;

  constructor(private http: HttpClient) { }

  getSortedNumbers(numbersToSort: NumbersToSort): Observable<NumbersSorted> {
    return this.http.post<NumbersSorted>(this.URL, numbersToSort);
  }

}
