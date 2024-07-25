import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from './first-section/first-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateConfigModule } from './translate-config.module';
import { TranslateService } from '@ngx-translate/core';
import { InprintComponent } from './inprint/inprint.component';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    HttpClientModule,
    TranslateConfigModule,
    FirstSectionComponent,
    AboutMeComponent,
    MySkillsComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent,
    InprintComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,  AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private titleService: Title, private router: Router, private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    if (this.currentLanguage === 'en') {
    }
  }

  ngOnInit() {
    this.setTitle('Artur Marbach');
    console.log('ngOnInit: Komponente wurde initialisiert.');
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('ngAfterViewInit: View wurde initialisiert.');
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
  title = 'Marbach';
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  isInprintOrAgbPage(): boolean {
    return this.router.url === '/inprint' || this.router.url === '/agb';
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}

