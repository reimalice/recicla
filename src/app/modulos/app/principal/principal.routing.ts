import { Routes } from '@angular/router';



export const PrincipalRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [{
      path: 'overview',
      component: ProfileOverviewComponent,
      data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
    }, 
    {
      path: 'settings',
      component: ProfileSettingsComponent,
      data: { title: 'Settings', breadcrumb: 'SETTINGS' }
    }, 
    {
      path: 'blank',
      component: ProfileBlankComponent,
      data: { title: 'Blank', breadcrumb: 'BLANK' }
    }]
  }
];