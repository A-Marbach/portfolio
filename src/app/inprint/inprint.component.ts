import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './inprint.component.html',
  styleUrl: './inprint.component.scss'
})
export class InprintComponent implements OnInit {

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  showNormalContent() {
    this.router.navigate(['/']);
  }

  get isGerman(): boolean {
    return this.translate.currentLang === 'de';
  }
}