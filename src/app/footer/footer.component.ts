import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
