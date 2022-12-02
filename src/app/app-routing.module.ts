import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortNumbersComponent } from './app-components/sort-numbers/sort-numbers-component/sort-numbers.component';

const routes: Routes = [
  { path: '', component: SortNumbersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
