import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { environment } from '../environments/environment';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendly-chat-da466","appId":"1:519082825666:web:8353df95625eb42049285b","storageBucket":"friendly-chat-da466.firebasestorage.app","apiKey":"AIzaSyAuQuXLnH9GYZyGT3BnVhDAaEwEZhfpSOc","authDomain":"friendly-chat-da466.firebaseapp.com","messagingSenderId":"519082825666","measurementId":"G-YR81NFMY6Q","projectNumber":"519082825666","version":"2"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()),
  ],
};
