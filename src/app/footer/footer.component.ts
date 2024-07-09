import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkIn = 'https://linkedin.com/in/a-marbach-21b964307';
  gitHub = 'https://github.com/A-Marbach';

  constructor(private router: Router) {} // Initialisierung des Routers

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn, '_blank'); // `_blank` öffnet die URL in einem neuen Tab
    } else if (url === 'g') {
      window.open(this.gitHub, '_blank');
    }
  }

  inprint(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.router.navigateByUrl('/impressum');
  }
}
