import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, CommonModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})


export class FirstSectionComponent {
  linkIn = 'https://linkedin.com/in/a-marbach-21b964307';
  gitHub = 'https://github.com/A-Marbach';
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

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn);
    } else if (url === 'g') {
      window.open(this.gitHub);
    }
  }
}



