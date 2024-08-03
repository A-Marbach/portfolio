import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit,  AfterViewInit{
  ngOnInit() {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
      

  developments = [
    {
      'title': 'Join',
      'skills': 'JavaScript | HTML | CSS',
      'description': 'development1.description',
      'img': 'assets/join.png',
      'url': 'https://join.artur-marbach.de',
      'github': 'https://github.com/A-Marbach/join'
    },
    {
      'title': 'El-pollo-loco',
      'skills': 'JavaScript | HTML | CSS',
      'description': 'development2.description',
      'img': 'assets/pollo-loco.png',
      'url': 'https://el-pollo-loco.artur-marbach.de',
      'github': 'https://github.com/A-Marbach/el-pollo-loco'
    },
    // {
    //   'title': 'Simple CRM',
    //   'skills': 'Angular | Firebase',
    //   'description': 'A very Simple Customer Relationship Management system working with CRUD functionality',
    //   'img': 'assets/crm.png',
    //   'url': '',
    //   'github': ''
    // }
  ]
  sendToUrl(url: string) {
    window.open(url);
  }
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