import { Component } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-portfolio',
  imports: [Button],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
 doNothing(): void { console.log('this implementation does nothing'); }
}
