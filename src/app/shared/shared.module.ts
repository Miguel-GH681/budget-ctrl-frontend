import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordCardComponent } from './record-card/record-card.component';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecordCardComponent,
    ChartComponent,
    PieChartComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    RecordCardComponent,
    PieChartComponent,
    FormModalComponent
  ]
})
export class SharedModule { }
