import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value !== null
      ? !control.value.split(',').map((element: string) => Number(element)).every(Boolean)
      : false;
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  }

}
