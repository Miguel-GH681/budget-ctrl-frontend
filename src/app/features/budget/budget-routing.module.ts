import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetDetailComponent } from './components/budget-detail/budget-detail.component';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';

const routes: Routes = [
  { path: '', component: BudgetHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
