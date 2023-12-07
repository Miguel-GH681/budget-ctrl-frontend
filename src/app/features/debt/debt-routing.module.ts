import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtHomeComponent } from './components/debt-home/debt-home.component';

const routes: Routes = [
  { path: '', component: DebtHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtRoutingModule { }
