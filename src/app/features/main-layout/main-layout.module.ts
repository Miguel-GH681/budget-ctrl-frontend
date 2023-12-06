import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DisplayMenuDirective } from './directives/display-menu.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DisplayMenuDirective
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DisplayMenuDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainLayoutModule { }
