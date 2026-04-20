import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  developments = [
    {
      title: 'Da-Bubble',
      skills: 'Angular | TypeScript | Firebase',
      description: 'development3.description',
      img: 'assets/da-bubble.png',
      url: 'https://da-bubble.artur-marbach.de',
      github: 'https://github.com/A-Marbach/daBubble'
    },
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS',
      description: 'development1.description',
      img: 'assets/join.png',
      url: 'https://join.artur-marbach.de',
      github: 'https://github.com/A-Marbach/join'
    },
    {
      title: 'El-pollo-loco',
      skills: 'JavaScript | HTML | CSS',
      description: 'development2.description',
      img: 'assets/pollo-loco.png',
      url: 'https://elpolloloco.artur-marbach.de',
      github: 'https://github.com/A-Marbach/el-pollo-loco'
    }
  ];

  sendToUrl(url: string) {
    window.open(url);
  }
}