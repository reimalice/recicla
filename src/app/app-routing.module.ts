import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modulos/login/login.component'
import { PrincipalComponent } from 'src/app/modulos/home/principal/principal.component';
import { RegistrarComponent } from 'src/app/modulos/registrar/registrar/registrar.component';
import { PrincipalAppComponent } from 'src/app/modulos/app/principal/principal.component';

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: '', 
    component: PrincipalAppComponent,
    children: [
      { 
        path: 'app', 
        loadChildren: './app/app.module#AppModule',
        data: { title: 'Session'} 
      }
    ]
  },
  
  {
    path: "**",
    redirectTo: '/'
}
];

