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

export class MySkillsComponent implements OnInit, AfterViewInit {
  ngOnInit() { }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }

  skills = [
    { name: 'JavaScript', img: 'assets/javascript.png' },
    { name: 'TypeScript', img: 'assets/typescript.png' },
    { name: 'Angular', img: 'assets/angular.png' },
    { name: 'HTML', img: 'assets/html.png' },
    { name: 'CSS', img: 'assets/css.png' },
    { name: 'Git', img: 'assets/git.png' },
    { name: 'REST API', img: 'assets/api.png' },

    { name: 'Firebase', img: 'assets/firebase.png' },
    { name: 'Docker', img: 'assets/docker.png' },
    { name: 'CI/CD', img: 'assets/cd.png' },
    { name: 'Security', img: 'assets/security.png' },

    {
      name: 'Continual\nLearning',
      img: 'assets/continually_learning.png',
      special: true
    }
  ];
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
