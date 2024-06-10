import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})


export class FirstSectionComponent {
  linkIn = 'https://linkedin.com/in/a-marbach-21b964307';
  gitHub = 'https://github.com/A-Marbach'


  goToUrl(url: string){
    if(url == 'l'){
      window.open(this.linkIn);
    }else if(url == 'g'){
      window.open(this.gitHub);

    }
   
  }
}
