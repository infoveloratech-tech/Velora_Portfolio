import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  siddharth = 'assets/images/siddharthImage.png';

  expertise = [
    'Responsive Web Application Development',
    'Cross-Platform Mobile Application Development',
    'Custom Software Solutions',
    'Front-End Development',
    'Back-End Development',
    'Database Design & Management',
    'API Development & Integration',
    'Application Maintenance & Support'
  ];
}
