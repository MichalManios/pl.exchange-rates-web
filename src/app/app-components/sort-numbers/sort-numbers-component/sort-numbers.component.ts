import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SortNumbersService } from '../sort-numbers.service';
import { NumbersToSort } from '../models/numbers-to-sort.interface';
import { onlyNumbersValidator } from '../../common/custom-validators/only-numbers-validator';

@Component({
  selector: 'app-sort-numbers',
  templateUrl: './sort-numbers.component.html',
  styleUrls: ['./sort-numbers.component.css']
})
export class SortNumbersComponent implements OnInit {

  numbersForm!: FormGroup;

  orders = [{orderType: 'ASC', description: 'ROSNĄCO'}, {orderType: 'DESC', description: 'MALEĄCO'}]

  private onlyNumbersAndCommaRegExp = /^[-,0-9]+$/;

  constructor(private formBuilder: FormBuilder,
              private sortNumbersService: SortNumbersService) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  sort() {
    const numbersToSort = {
      order: this.numbersForm.controls['orderType'].value,
      numbers: this.getNumbersFromForm(this.numbersForm.controls['numbers'].value)
    } as NumbersToSort;

    this.sortNumbersService.getSortedNumbers(numbersToSort).subscribe(console.log);
    this.setForm();
  }

  private setForm(): void {
    this.numbersForm = this.formBuilder.group({
      orderType: [this.orders[0].orderType, {updateOn: 'blur'}],
      numbers: [null, [Validators.pattern(this.onlyNumbersAndCommaRegExp), onlyNumbersValidator()], null, {updateOn: 'blur'}]
    });
  }

  private getNumbersFromForm(numbers: string): number[] {
    return numbers.split(',').map(element => Number(element));
  }
}
