import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inprint',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './inprint.component.html',
  styleUrl: './inprint.component.scss'
})
export class InprintComponent {

  constructor( private router: Router){

  }
  
  showNormalContent() {
    // Navigiert zur Hauptseite (Home), passen Sie den Pfad nach Bedarf an
    this.router.navigate(['/']);
  }
}
