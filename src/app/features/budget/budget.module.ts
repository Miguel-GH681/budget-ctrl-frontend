import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetChartComponent } from './components/budget-chart/budget-chart.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetDetailComponent } from './components/budget-detail/budget-detail.component';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';


@NgModule({
  declarations: [
    BudgetChartComponent,
    BudgetListComponent,
    BudgetDetailComponent,
    BudgetHomeComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
