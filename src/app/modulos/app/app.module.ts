import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalAppComponent } from './principal/principal.component';
import {MaterialModule} from '../../material.module';
import { PrincipalRoutes } from 'src/app/modulos/app/principal/principal.routing';
import { RouterModule } from '@angular/router';
import { CrearPaqueteComponent } from './principal/crear-paquete/crear-paquete.component';

@NgModule({
  declarations: [PrincipalAppComponent, CrearPaqueteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PrincipalRoutes)
  ]
})
export class AppModule { }
