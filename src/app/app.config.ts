import { ApplicationConfig, inject, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { RedirectCommand, Router, provideRouter, withComponentInputBinding, withNavigationErrorHandler, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withNavigationErrorHandler((error) => {
        console.log('error', error);

        const router = inject(Router);
        const urlTree = router.parseUrl('/error')
        return new RedirectCommand(urlTree, {
          state: {
            error
          }
        })
      }),
    ),
    provideClientHydration(
      // withEventReplay()
    )
  ]
};
