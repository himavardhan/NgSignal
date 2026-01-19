import { Routes } from '@angular/router';
import { Login, About } from './Components';
import { Layout } from './Layout';



export const routes: Routes = [
  { path: '', component: Login},
  { path: '', component: Layout, children: [
    { path: 'dashboard', loadComponent: () => import('./Layout/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'about', loadComponent: () => import('./Components/about/about').then(m => m.About) }
  ]},
  { path: 'openBillSignUp', loadComponent: () => import('./Components/sign-up/sign-up').then(m => m.SignUp) }
];
