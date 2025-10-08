import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  imports: [Button],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  constructor(public router: Router) {}

  navigate():void{
    this.router.navigate(['/contact']);
  }
}
