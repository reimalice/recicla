import { Routes } from '@angular/router';

import{PrincipalAppComponent} from './principal.component';
import{CrearPaqueteComponent} from './crear-paquete/crear-paquete.component'
export const PrincipalRoutes: Routes = [
  {
    path: '',
    component: PrincipalAppComponent,
    children: [{
      path: 'crear-paquete',
      component: CrearPaqueteComponent,
    }]
  }
];