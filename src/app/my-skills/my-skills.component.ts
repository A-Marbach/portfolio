import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent implements OnInit,  AfterViewInit {
  ngOnInit() {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
      
  // images = [
  //   'assets/python.png',
  //   'assets/docker_container.png',
  //   'assets/yaml.png',
  //   'assets/CD.png',
  //   'assets/Shell_scripting.png',
  //   'assets/it_security.png',
  //   'assets/css.png',
  //   'assets/html.png',
  //   'assets/docu.png',
  // ]
   skills = [
     {
      title: "Docker",
      img: 'assets/docker_container.png',
      description: [
        "Containerisierung von Anwendungen",
        "Erstellung von Dockerfiles",
        "Image-Management & Registry"
      ]
    },
     {
      title: "CI/CD",
      img: 'assets/CD.png',
      description: [
        "Automatisierte Build-Pipelines",
        "Test- und Deployment-Prozesse",
        "Integration mit GitHub/GitLab"
      ]
    },
   
   
    {
      title: "Shell Scripting",
      img: 'assets/Shell_scripting.png',
      description: [
        "Automatisierte Systemaufgaben",
        "Batch- und Cron-Jobs erstellen",
        "Systemadministration optimieren"
      ]
    },
    {
      title: "YAML",
      img: 'assets/yaml.png',
      description: [
        "Konfiguration von Services",
        "CI/CD Pipelines definieren",
        "Deployment-Templates erstellen"
      ]
    },
     {
      title: "IT-Security",
      img: 'assets/it_security.png',
      description: [
        "Sicherheitsüberprüfungen durchführen",
        "Penetration Tests planen",
        "Best Practices & Compliance"
      ]
    },
    {
      title: "Python",
      img: 'assets/python.png',
      description: [
        "Automatisierung von Abläufen",
        "Skripting für DevOps-Prozesse",
        "Datenanalyse und Tools"
      ]
    },
  
    {
      title: "HTML",
      img: 'assets/html.png',
      description: [
        "Erstellung semantischer Webseiten",
        "Strukturierung von Inhalten",
        "Barrierefreie Layouts"
      ]
    },
     {
      title: "Docusaurus",
      img: 'assets/docu.png',
      description: [
        "Dokumentations-Websites erstellen",
        "Markdown-Inhalte integrieren",
        "Theming und Anpassungen"
      ]
    },
    {
      title: "CSS",
      img: 'assets/css.png',
      description: [
        "Design responsiver Layouts",
        "Flexbox & Grid Anwendungen",
        "Animations- und Styling-Effekte"
      ]
    }
  ];

  // title = [
  //   'Linux',
  //   'Docker',
  //   'CI/CD',
  //   'AWS',
  //   'Monitoring',
  //   'IT-Security',
  //   'Git',
  //   'Angular',
  //   'Typescript'
  // ]
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
