import { Component, isStandalone } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [ TranslateModule, CommonModule],
  templateUrl: './agb.component.html',
  styleUrl: './agb.component.scss'
})
export class AgbComponent {
  isGerman = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

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
}