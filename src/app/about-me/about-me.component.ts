import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit,  AfterViewInit {
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialisieren von AOS nur im Browser
    }
  }
  isGerman: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translate: TranslateService) {
   
  }

 
}
