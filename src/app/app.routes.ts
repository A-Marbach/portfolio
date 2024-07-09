import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { InprintComponent } from './inprint/inprint.component';

export const routes: Routes = [
   
    { path: 'https://join.artur-marbach.de', component: PortfolioComponent }, // Die Standardroute zeigt auf die HomeComponent
    { path: 'www.linkedin.com/in/a-marbach-21b964307', component: FirstSectionComponent }, // Die Standardroute zeigt auf die HomeComponent
    { path: 'impressum', component: InprintComponent }, // Die Standardroute zeigt auf die HomeComponent


];
