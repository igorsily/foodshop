import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path: '', component: AppComponent},

  {
    path: 'admin',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: true
    })],
    exports: [RouterModule]
  })
export class AppRoutingModule { }