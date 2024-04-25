import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { mergeApplicationConfig} from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { appConfig } from './app.config';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes)]
  providers: [
      provideRouter(routes),
      provideHttpClient(withFetch())
    ]
};


// .catch(err => console.error(err))
