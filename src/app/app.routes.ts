import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home)
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./pages/about/about').then((m) => m.About)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.Gallery)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact)
  }
];
