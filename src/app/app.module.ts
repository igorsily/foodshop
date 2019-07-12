import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbThemeModule, NbSidebarService, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    AppRoutingModule,
    AdminLayoutModule,
    NbEvaIconsModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
