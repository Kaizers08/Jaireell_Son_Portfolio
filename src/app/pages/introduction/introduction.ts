import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [Button],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css'
})
export class Introduction {
  greetingText: string = 'Hello!  My name is';
  fullName: string = 'Jaireell Son S. Regala';
  roleText: string = 'I\’m a Web and Mobile App Developer';
  introductionText: string = 'passionate about creating dynamic and responsive applications that deliver seamless user experiences.';
  aboutMeButtonText: string = 'About Me';

  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/about-me']);
  }
}
