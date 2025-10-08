import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Main } from './pages/main/main';
import { AboutMe } from './pages/about-me/about-me';
import { Portfolio } from './pages/portfolio/portfolio';


export const routes: Routes = [
  { path: '', component: Main, pathMatch: 'full' },
  { path: 'about-me', component: AboutMe },
  { path: 'portfolio', component: Portfolio },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
