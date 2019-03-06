import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RegistrarModule { }
