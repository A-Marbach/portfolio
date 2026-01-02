import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// Factory-Funktion für ngx-translate HTTP Loader
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  // Pfad zu deinen Übersetzungsdateien, z.B. assets/i18n/de.json
  return new TranslateHttpLoader(http, './assets/', '.json');
}
