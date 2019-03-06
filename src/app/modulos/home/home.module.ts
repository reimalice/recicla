import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import {MaterialModule} from '../../material.module';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})


export class HomeModule { }
