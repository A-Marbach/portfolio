import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importieren von provideHttpClient und withFetch
import { appConfig } from './app.config';

// Erstellen der Server-Konfiguration mit HTTP-Client und Fetch
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()) // Hinzufügen von withFetch() zum HTTP-Client
  ]
};

// Zusammenführen der allgemeinen App-Konfiguration mit der Server-Konfiguration
export const config = mergeApplicationConfig(appConfig, serverConfig);