import { Component, isStandalone } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, CommonModule],
  templateUrl: './agb.component.html',
  styleUrl: './agb.component.scss'
})
export class AgbComponent {
  currentLanguage: string = 'en';
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
        window.scrollTo(0, 0);
      }
    });
  }

  showNormalContent() {
    this.router.navigate(['/']);
  }
}
