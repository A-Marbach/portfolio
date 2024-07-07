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
  ngOnInit(): void {

  }

  menuContent(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    document.getElementById('mobile-content')?.classList.remove('display-none');


  }

  closeContent() {
    document.getElementById('mobile-content')?.classList.add('display-none');
  }

  constructor(private translate: TranslateService) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}






