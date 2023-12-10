import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AccountDetailComponent,
    AccountListComponent,
    AccountHomeComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class AccountModule { }
