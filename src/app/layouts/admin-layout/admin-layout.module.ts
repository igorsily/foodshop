import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbCardModule, NbInputModule, NbSelectModule, NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AdminLayoutComponent

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbCheckboxModule
  ]
})
export class AdminLayoutModule { }
