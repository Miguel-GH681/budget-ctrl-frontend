import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./features/main-layout/main-layout.module').then(b => b.MainLayoutModule) },
  { path: 'budget', loadChildren: ()=> import('./features/budget/budget.module').then(b => b.BudgetModule) },
  { path: 'account', loadChildren: ()=> import('./features/account/account.module').then( a => a.AccountModule) },
  { path: 'bank', loadChildren: ()=> import('./features/bank/bank.module').then(b => b.BankModule) },
  { path: 'debt', loadChildren: ()=> import('./features/debt/debt.module').then(d => d.DebtModule) },
  { path: 'dashboard', loadChildren: ()=> import('./features/dashboard/dashboard.module').then(d => d.DashboardModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
