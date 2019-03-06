import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modulos/login/login.component'
import { PrincipalComponent } from 'src/app/modulos/home/principal/principal.component';
import { RegistrarComponent } from 'src/app/modulos/registrar/registrar/registrar.component';

const routes: Routes = [
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
    path: "**",
    redirectTo: '/'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
