import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutModule } from './features/main-layout/main-layout.module';
import { DebtHomeComponent } from './features/debt/components/debt-home/debt-home.component';
import { DebtChartComponent } from './features/debt/components/debt-chart/debt-chart.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DebtHomeComponent,
    DebtChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainLayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
