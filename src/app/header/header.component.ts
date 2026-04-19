import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  menuContent(event: Event) {
    event.preventDefault();
    document.getElementById('mobile-content')?.classList.remove('display-none');
  }

  closeContent() {
    document.getElementById('mobile-content')?.classList.add('display-none');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang;
  }
}