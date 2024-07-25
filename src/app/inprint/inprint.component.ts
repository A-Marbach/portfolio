import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inprint',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './inprint.component.html',
  styleUrl: './inprint.component.scss'
})
export class InprintComponent {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt
  isGerman: boolean = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }
  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  ngOnInit() {
    // Scrollt die Seite beim ersten Laden nach oben
    window.scrollTo(0, 0);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrollt die Seite nach oben
      }
    });
  }

  showNormalContent() {
    // Navigiert zur Hauptseite (Home), passen Sie den Pfad nach Bedarf an
    this.router.navigate(['/']);
  }
}
