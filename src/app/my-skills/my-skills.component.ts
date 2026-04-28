import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  skills = [
    { name: 'JavaScript', img: 'assets/javascript.png' },
    { name: 'TypeScript', img: 'assets/typescript.png' },
    { name: 'Angular', img: 'assets/angular.svg' },
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
}