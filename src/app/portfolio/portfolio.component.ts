import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  ngOnInit() { }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }


  developments = [
    {
      'title': 'Da-Bubble',
      'description': 'development3.description',
      'img': 'assets/da-bubble.png',
      'url': 'https://github.com/A-Marbach/aws_dabubble/blob/main/README.md',
      'github': 'https://github.com/A-Marbach/aws_dabubble',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
        { icon: 'assets/cicd.png' },
        { icon: 'assets/security.png' }
      ]
    },
    {
      'title': 'Conduit-Container',
      'img': 'assets/conduit.png',
      'description': 'development5.description',
      'url': 'https://github.com/A-Marbach/conduit-container/blob/main/readme.md',
      'github': 'https://github.com/A-Marbach/conduit-container',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
        { icon: 'assets/yaml-icon.png' },
        { icon: 'assets/cicd.png' }
      ]
    },
    {
      'title': 'Juice Shop Master',
      'img': 'assets/juice-shop.png',
      'description': 'development10.description',
      'url': 'https://github.com/A-Marbach/juice-shop-master/blob/main/README.md',
      'github': 'https://github.com/A-Marbach/juice-shop-master',
      'skills': [
        { icon: 'assets/python-icon.png' },
        { icon: 'assets/security.png' }
      ]
    },
    {
      'title': 'Truck-Signs API - VM Deployment',
      'description': 'development1.description',
      'img': 'assets/truck_signs_api.png',
      'url': 'https://github.com/A-Marbach/truck_signs_api/blob/main/README.md',
      'github': 'https://github.com/A-Marbach/truck_signs_api',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
        { icon: 'assets/yaml-icon.png' },
      ]
    },

    {
      'title': 'Minecraft',
      'description': 'development7.description',
      'img': 'assets/Minecraft.png',
      'url': 'https://github.com/A-Marbach/minecraft-server/blob/main/readme.md',
      'github': 'https://github.com/A-Marbach/minecraft-server',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
        { icon: 'assets/yaml-icon.png' },
      ]
    },
    {
      'title': 'Wordpress',
      'description': 'development8.description',
      'img': 'assets/wordpress.png',
      'url': 'https://github.com/A-Marbach/wordpress/blob/main/readme.md',
      'github': 'https://github.com/A-Marbach/wordpress',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
      ]
    },
    {
      'title': 'Baby-Tools-Shop',
      'description': 'development9.description',
      'img': 'assets/Baby_Tools.png',
      'url': 'https://github.com/A-Marbach/baby-tools-shop/blob/main/README.md',
      'github': 'https://github.com/A-Marbach/baby-tools-shop',
      'skills': [
        { icon: 'assets/shell.png' },
        { icon: 'assets/container.png' },
      ]
    },

    // {
    //   'title': 'Truck-Signs API – Terraform / AWS Deployment',
    //   'skills': 'Docker | Linux VM | PostgreSQL | Terraform | AWS',
    //   'description': 'development6.description',
    //   'img': 'assets/da-bubble.png',
    //   'url': 'https://da-bubble.artur-marbach.de',
    //   'github': ''
    // },
    // {
    //   'title': 'Monitoring & Observability',
    //   'skills': 'Prometheus | Grafana | Linux | Docker',
    //   'description': 'development4.description',
    //   'img': 'assets/join.png',
    //   'url': 'https://join.artur-marbach.de',
    //   'github': 'https://github.com/A-Marbach/join'
    // },



  ]
  sendToUrl(url: string) {
    window.open(url);
  }
  isGerman: boolean = false;
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}