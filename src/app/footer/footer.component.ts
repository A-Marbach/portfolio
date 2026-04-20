import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  linkIn = 'https://linkedin.com/in/artur-marbach';
  gitHub = 'https://github.com/A-Marbach';

  constructor(private router: Router) {}

  inprint(event: Event) {
    event.preventDefault();
    this.router.navigate(['/inprint']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  goToUrl(url: string) {
    if (url === 'l') {
      window.open(this.linkIn, '_blank');
    } else if (url === 'g') {
      window.open(this.gitHub, '_blank');
    }
  }
}