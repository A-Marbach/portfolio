import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
  isGerman: boolean = false;
  currentLanguage: string = 'de';

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService) {
    this.translate.setDefaultLang('de'); // Fallback
    this.translate.use('de');            // aktive Sprache
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
      this.currentLanguage = event.lang;
    });
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
