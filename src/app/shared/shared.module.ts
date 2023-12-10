import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordCardComponent } from './record-card/record-card.component';



@NgModule({
  declarations: [
    RecordCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecordCardComponent
  ]
})
export class SharedModule { }
