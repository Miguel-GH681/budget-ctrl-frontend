import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementHomeComponent } from './components/movement-home/movement-home.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovementHomeComponent,
    MovementListComponent
  ],
  imports: [
    CommonModule,
    MovementRoutingModule,
    SharedModule
  ]
})
export class MovementModule { }
