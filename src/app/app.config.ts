
import { ApplicationConfig, provideBrowserGlobalErrorListeners, Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { Login } from './Components';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })

  ]
};
