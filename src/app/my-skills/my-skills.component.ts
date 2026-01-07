import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit, AfterViewInit {
  skills = [
    // Deine Skills hier
    { titleKey: "DOCKER_TITLE", img: 'assets/docker_container.png', descriptionKeys: ["DOCKER_DESC1","DOCKER_DESC2","DOCKER_DESC3"] },
    { titleKey: "CICD_TITLE", img: 'assets/CD.png', descriptionKeys: ["CICD_DESC1","CICD_DESC2","CICD_DESC3"] },
    { titleKey: "SHELL_TITLE", img: 'assets/Shell_scripting.png', descriptionKeys: ["SHELL_DESC1","SHELL_DESC2","SHELL_DESC3"] },
    { titleKey: "YAML_TITLE", img: 'assets/yaml.png', descriptionKeys: ["YAML_DESC1","YAML_DESC2","YAML_DESC3"] },
    { titleKey: "SECURITY_TITLE", img: 'assets/it_security.png', descriptionKeys: ["SECURITY_DESC1","SECURITY_DESC2","SECURITY_DESC3"] },
    { titleKey: "PYTHON_TITLE", img: 'assets/python.png', descriptionKeys: ["PYTHON_DESC1","PYTHON_DESC2","PYTHON_DESC3"] },
    { titleKey: "HTML_TITLE", img: 'assets/html.png', descriptionKeys: ["HTML_DESC1","HTML_DESC2","HTML_DESC3"] },
    { titleKey: "DOCUSAURUS_TITLE", img: 'assets/docu.png', descriptionKeys: ["DOCUSAURUS_DESC1","DOCUSAURUS_DESC2","DOCUSAURUS_DESC3"] },
    { titleKey: "CSS_TITLE", img: 'assets/css.png', descriptionKeys: ["CSS_DESC1","CSS_DESC2","CSS_DESC3"] }
  ];

  isGerman: boolean = false;
  currentLanguage: string = 'en';

  // Mobile Pagination
  skillGroups: any[][] = [];
  currentPage = 0;
  skillsPerPage = 3;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe(event => this.isGerman = event.lang === 'de');
  }

  ngOnInit() {
    this.groupSkills();
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  // Gruppiere Skills in Gruppen zu 3
  private groupSkills() {
    this.skillGroups = [];
    for (let i = 0; i < this.skills.length; i += this.skillsPerPage) {
      this.skillGroups.push(this.skills.slice(i, i + this.skillsPerPage));
    }
  }

  goToPage(pageIndex: number) {
    this.currentPage = pageIndex;
  }

  private checkMobile() {
    this.isMobile = window.innerWidth <= 700;
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
