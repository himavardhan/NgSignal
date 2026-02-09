import { Routes } from '@angular/router';
import { Login, About } from './Components';
import { Layout } from './Layout';



export const routes: Routes = [
  { path: '', component: Login},
  { path: '', component: Layout, children: [
    { path: 'dashboard', loadComponent: () => import('./Layout/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'about', loadComponent: () => import('./Components/about/about').then(m => m.About) },
    { path: 'assets', loadComponent: () => import('./Layout/assets/assets').then(m => m.Assets) },
    { path:'gpt4mini', loadComponent: () => import('./Layout/openai/gpt4-min/gpt4-min').then(m => m.GPT4Min) },
    { path:'gpt5mini', loadComponent: () => import('./Layout/openai/gpt5mini/gpt5mini').then(m => m.GPT5mini) },
    { path:'contactUs', loadComponent: () => import('./Components/contact-us/contact-us').then(m => m.ContactUs) }
  ]},
  { path: 'openBillSignUp', loadComponent: () => import('./Components/sign-up/sign-up').then(m => m.SignUp) }
];
