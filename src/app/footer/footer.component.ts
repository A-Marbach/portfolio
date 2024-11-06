import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkIn = 'https://linkedin.com/in/artur-marbach';
  gitHub = 'https://github.com/A-Marbach';
  isGerman: boolean = false;
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  constructor(private router: Router, private translate: TranslateService) { 
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  inprint(event: Event) {
    event.preventDefault(); // Verhindert die Standardaktion des Links
    this.router.navigate(['/inprint']).then(() => {
      window.scrollTo(0, 0); // Scrollt die Seite nach oben
    });
  }

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn, '_blank'); // `_blank` öffnet die URL in einem neuen Tab
    } else if (url === 'g') {
      window.open(this.gitHub, '_blank');
    }
  }

}
