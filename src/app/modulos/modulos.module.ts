import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../material.module';
import {PrincipalComponent} from './home/principal/principal.component'
import { RegistrarComponent } from 'src/app/modulos/registrar/registrar/registrar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrincipalAppComponent } from 'src/app/modulos/app/principal/principal.component';
@NgModule({
  declarations: [
    LoginComponent,
    PrincipalComponent,
    RegistrarComponent,
  PrincipalAppComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    
  ]
})
export class ModulosModule { }
