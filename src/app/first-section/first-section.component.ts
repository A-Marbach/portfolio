import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})
export class FirstSectionComponent implements OnInit, AfterViewInit {

  linkIn = 'https://linkedin.com/in/artur-marbach';
  gitHub = 'https://github.com/A-Marbach';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // AOS.init(); optional
    }
  }

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn, '_blank');
    } else if (url === 'g') {
      window.open(this.gitHub, '_blank');
    }
  }
}