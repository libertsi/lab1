import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cloud',
    loadComponent: () => import('./cloud/cloud.page').then( m => m.CloudPage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
  {
    path: 'servicepage',
    loadComponent: () => import('./servicepage/servicepage.page').then( m => m.ServicepagePage)
  },
  {
    path: 'view-clothing',
    loadComponent: () => import('./view-clothing/view-clothing.page').then( m => m.ViewClothingPage)
  },
  {
    path: 'filter',
    loadComponent: () => import('./filter/filter.page').then( m => m.FilterPage)
  },
];
