import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {  Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './agb.component.html',
  styleUrl: './agb.component.scss'
})
export class AgbComponent {

  constructor( private router: Router){}
  
  ngOnInit() {
    // Scrollt die Seite beim ersten Laden nach oben
    window.scrollTo(0, 0);
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrollt die Seite nach oben
      }
    });
  }
  
  showNormalContent() {
    // Navigiert zur Hauptseite (Home), passen Sie den Pfad nach Bedarf an
    this.router.navigate(['/']);
  }
}
