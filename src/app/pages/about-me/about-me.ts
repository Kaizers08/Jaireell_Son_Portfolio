import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-me',
  imports: [Button],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
 sectionTitle: string = 'About Me';
 introductionText: string = 'Learn more';
 aboutMeParagraph1: string = 'I am a passionate developer.';
 aboutMeParagraph2: string = 'I specialize in building web applications.';
 aboutMeParagraph3: string = 'I am constantly learning and improving my skills.';
 buttonText: string = 'View Portfolio';


  constructor(public router: Router) {}

  navigate():void{
    this.router.navigate(['/portfolio']);
  }

}
