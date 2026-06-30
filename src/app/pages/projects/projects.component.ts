import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Livsspace Interiors',
      category: 'Interior Design Platform',
      desc: 'A comprehensive home interior design platform connecting homeowners with professional interior designers, featuring project planning and visualization tools.',
      icon: 'fas fa-home',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      tech: ['Web', 'UI/UX', 'E-Commerce'],
      link: 'https://www.livspace.com/in/landing-page/home-interiors/alt-new-gl'
    },
    {
      name: 'IGP Gift Shop',
      category: 'E-Commerce',
      desc: 'An online gift delivery platform enabling customers to send personalized gifts across India with seamless ordering, tracking, and customization features.',
      icon: 'fas fa-gift',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      tech: ['E-Commerce', 'Web', 'Delivery'],
      link: 'https://www.igp.com/'
    },
    {
      name: "St. John's Hospital",
      category: 'Healthcare',
      desc: 'A digital platform for St. John\'s Hospital providing patient information, appointment booking, department details, and healthcare service management.',
      icon: 'fas fa-hospital',
      gradient: 'linear-gradient(135deg, #1a6dff 0%, #06b6d4 100%)',
      tech: ['Healthcare', 'Web', 'Portal'],
      link: 'https://www.stjohns.in/hospital/'
    }
  ];
}
