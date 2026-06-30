import { Component, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = signal(false);
  isLoading = signal(false);

  form = { name: '', email: '', subject: '', message: '' };

  ngOnInit() {
    // No external library needed
  }

  async onSubmit() {
    this.isLoading.set(true);
    
    try {
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('subject', this.form.subject);
      formData.append('message', this.form.message);

      const response = await fetch('https://formsubmit.co/ajax/info.veloratech@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('✓ Message sent successfully');
        this.submitted.set(true);
        this.form = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => this.submitted.set(false), 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again or contact us directly via email.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
