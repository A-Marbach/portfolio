import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './translate.module';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class TranslateConfigModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de'); // Fallback-Sprache

    // Sprache nach einer kurzen Verzögerung setzen, um sicherzustellen,
    // dass der Loader vollständig initialisiert ist
    setTimeout(() => {
      this.translate.use('de');
    }, 0);
  }
}
