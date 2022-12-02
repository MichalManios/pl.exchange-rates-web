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

  orders = [{orderType: 'ASC', description: 'ROSNĄCO'}, {orderType: 'DESC', description: 'MALEJĄCO'}]

  toSort: number[] = [];

  buttonsNumbersSorted:Array<string> = [];

  private onlyNumbersAndCommaRegExp = /^[-,0-9]+$/;

  constructor(private formBuilder: FormBuilder,
              private sortNumbersService: SortNumbersService) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  sort(): void {
    this.clearButtonsNumberSorted();

    this.sortNumbersService.getSortedNumbers(this.getNumbersToSort(this.numbersForm))
      .subscribe(({ numbers }) => this.prepareDataToDisplayResult(numbers));
  }

  public addButtonNumbersSorted(numberSorted: number): void {
    this.buttonsNumbersSorted = [...this.buttonsNumbersSorted, `${numberSorted}`];
  }

  private setForm(): void {
    this.numbersForm = this.formBuilder.group({
      orderType: [this.orders[0].orderType, {updateOn: 'blur'}],
      numbers: [null, [Validators.pattern(this.onlyNumbersAndCommaRegExp), onlyNumbersValidator()], null, {updateOn: 'blur'}]
    });
  }

  private getNumbersFromForm(numbers: string): number[] {
    return numbers ? numbers.split(',').map(element => Number(element)) : [];
  }

  private getNumbersToSort(numbersForm: FormGroup): NumbersToSort {
    return {
      order: numbersForm.controls['orderType'].value,
      numbers: this.getNumbersFromForm(numbersForm.controls['numbers'].value)
    } as NumbersToSort;
  }

  private clearButtonsNumberSorted(): void {
    this.buttonsNumbersSorted = [];
  }

  private prepareDataToDisplayResult(numbers: number[]): void {
    this.toSort = [...numbers];
    numbers.forEach(number => this.addButtonNumbersSorted(number));
    this.setForm();
  }

}
