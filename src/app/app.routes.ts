import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { InprintComponent } from './inprint/inprint.component';
import { AgbComponent } from './agb/agb.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'first-section', component: FirstSectionComponent },
  { path: 'inprint', component: InprintComponent },
  { path: 'agb', component: AgbComponent }
];