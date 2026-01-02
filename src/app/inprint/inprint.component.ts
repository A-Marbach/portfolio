import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inprint',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './inprint.component.html',
  styleUrl: './inprint.component.scss'
})
export class InprintComponent {
  currentLanguage: string = 'de'; // Standardmäßig Englisch ausgewählt
  isGerman: boolean = false;

  constructor(private router: Router, private translate: TranslateService, @Inject(PLATFORM_ID) private platformId: any) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }
  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

    ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      // Scroll beim Laden
      window.scrollTo(0, 0);

      // Scroll nach Navigation
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });

    }
  }

      showNormalContent() {
        // Navigiert zur Hauptseite (Home), passen Sie den Pfad nach Bedarf an
        this.router.navigate(['/']);
      }
    }
