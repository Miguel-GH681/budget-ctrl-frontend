import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementHomeComponent } from './components/movement-home/movement-home.component';

const routes: Routes = [
  { path: '', component: MovementHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementRoutingModule { }
