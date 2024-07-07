import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})



export class MySkillsComponent {
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

  title =[
    'Javascript',
    'Typescript',
    'Angular',
    'HTML',
    'Firebase',
    'Git',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material-Design',
    'Wordpress',
  ]
  isGerman: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
