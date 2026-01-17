import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  // Add your new routes here
  { path: 'dashboard', loadComponent: () => import('./dashboard-component/dashboard-component').then(m => m.DashboardComponent) },
  // Example: { path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent) },
];
