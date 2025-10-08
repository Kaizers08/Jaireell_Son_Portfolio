import { Component } from '@angular/core';
import { Introduction } from '../introduction/introduction';
import { Portfolio } from '../portfolio/portfolio';
import { AboutMe } from '../about-me/about-me';
import { Services } from '../services/services';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-main',
  imports: [
    Introduction,
    AboutMe,
    Portfolio,
    Services,
    Contact,],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
