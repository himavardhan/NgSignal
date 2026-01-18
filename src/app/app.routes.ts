import { Routes } from '@angular/router';
import { Dashboard } from './Layout';
import { Login } from './Components';

export const routes: Routes = [
  { path: '', component: Login},
  { path: 'dashboard', loadComponent: () => import('./Layout/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'openBillSignUp', loadComponent: () => import('./Components/sign-up/sign-up').then(m => m.SignUp) }
];
