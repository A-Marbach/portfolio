import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
 

  menuContent(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    document.getElementById('mobile-content')?.classList.remove('display-none');
}

closeContent(){
  document.getElementById('mobile-content')?.classList.add('display-none');
}

  constructor() {
   
  }
  
ngOnInit(): void {

}



  }
