import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ClienteAddComponent } from 'src/cliente/cliente-add.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/app-cliente', pathMatch: 'full' },
    {
      path: 'app-cliente',
      component: ClienteAddComponent
    }
  ];

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })

  export class AppRoutingModule {

  }
