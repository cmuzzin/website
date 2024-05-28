import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { IconsModule } from './icons/icons.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyAzssf1YYLC68y7HlKtl-0DM9X-fkF_f_M",
      authDomain: "website-444c9.firebaseapp.com",
      projectId: "website-444c9",
      storageBucket: "website-444c9.appspot.com",
      messagingSenderId: "526849955630",
      appId: "1:526849955630:web:c1b9aa31c4f53c8d8f8cbf",
      measurementId: "G-90F3KNEG33"
     })),
    importProvidersFrom([IconsModule]),
  ]
};
