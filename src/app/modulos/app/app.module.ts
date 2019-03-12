import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalAppComponent } from './principal/principal.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  declarations: [PrincipalAppComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AppModule { }
