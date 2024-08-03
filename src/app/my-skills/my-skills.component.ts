import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent implements OnInit,  AfterViewInit {
  ngOnInit() {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
      
  images = [
    'assets/javascript.png',
    'assets/typescript.png',
    'assets/angular.png',
    'assets/html.png',
    'assets/firebase.png',
    'assets/git.png',
    'assets/css.png',
    'assets/api.png',
    'assets/scrum.png',
    'assets/material-design.png',
    'assets/wordpress.png'
  ]

  title = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'HTML',
    'Firebase',
    'Git',
    'CSS',
    'Rest Api',
    'Scrum',
    'Material Design',
    'Wordpress',
  ]
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
}
