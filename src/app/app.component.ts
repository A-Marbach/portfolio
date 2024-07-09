import { Component,OnInit } from '@angular/core';
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
export class AppComponent {
  title = 'portfolio';
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}

