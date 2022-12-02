import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortNumbersComponent } from './sort-numbers-component/sort-numbers.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ SortNumbersComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SortNumbersModule { }
