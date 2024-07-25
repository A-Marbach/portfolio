import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt
  ngOnInit(): void {
  }

  menuContent(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    document.getElementById('mobile-content')?.classList.remove('display-none');
    document.getElementById('header')?.classList.add('display-none');
  }

  closeContent() {
    document.getElementById('mobile-content')?.classList.add('display-none');
    document.getElementById('btn-hover')?.classList.remove('display-none');
    document.getElementById('header')?.classList.remove('display-none');
  }

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}






