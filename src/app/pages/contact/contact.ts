import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Button } from '../../components/button/button';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Button], // Add FormsModule here
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  linkedin = 'https://www.linkedin.com/in/jaireell-son-regala-988744360/';
  email = 'jaireellson.regala@gmail.com';

  //credentials
  private serviceId = 'jaireellson_8769';
  private templateId = 'template_c6dfiu6';
  private userId = 'F2LBhorbOp3VxqkkG';


  isSuccess = false;
  message = '';

  sendData(): void {
    if (!this.contactForm || !this.contactForm.nativeElement) {
      this.showError('Form not found');
      return;
    }

    const form = this.contactForm.nativeElement;
    if (!form.checkValidity()) {
      this.showError('Please fill in all required fields');
      form.reportValidity();
      return;
    }

    emailjs.sendForm(this.serviceId, this.templateId, form, this.userId)
      .then((result: any) => {
        console.log('Email successfully sent!', result.text);
        this.isSuccess = true;
        this.message = 'Your message has been sent successfully!';
        form.reset();
        setTimeout(() => (this.message = ''), 5000);
      }, (error: any) => {
        console.error('Failed to send email:', error.text);
        this.showError('Failed to send message. Please try again later.');
      });
  }

  private showError(errorMsg: string): void {
    this.isSuccess = false;
    this.message = errorMsg;
    setTimeout(() => (this.message = ''), 5000);
  }
}
