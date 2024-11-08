import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, CommonModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})

export class FirstSectionComponent implements OnInit,  AfterViewInit {
  ngOnInit() {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }

  linkIn = 'https://linkedin.com/in/artur-marbach';
  gitHub = 'https://github.com/A-Marbach';
  isGerman: boolean = false;
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translate: TranslateService) {
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

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn);
    } else if (url === 'g') {
      window.open(this.gitHub);
    }
  }
}



