import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-laptop-code',
      iconColor: '#1a6dff',
      bgColor: 'rgba(26,109,255,0.1)',
      title: 'Web Application Development',
      desc: 'We build modern, responsive web applications using the latest frameworks and technologies. From simple websites to complex enterprise-grade platforms.',
      features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Responsive & Mobile-First Design', 'Performance Optimization', 'API Integration']
    },
    {
      icon: 'fas fa-mobile-alt',
      iconColor: '#10b981',
      bgColor: 'rgba(16,185,129,0.1)',
      title: 'Mobile Application Development',
      desc: 'Cross-platform mobile apps that deliver native performance and exceptional user experience on both iOS and Android platforms.',
      features: ['Cross-Platform Development', 'Native iOS & Android Apps', 'Offline-First Architecture', 'Push Notifications', 'App Store Deployment']
    },
    {
      icon: 'fas fa-cogs',
      iconColor: '#7c3aed',
      bgColor: 'rgba(124,58,237,0.1)',
      title: 'Custom Software Development',
      desc: 'Bespoke software solutions engineered from the ground up to address your unique business challenges and operational needs.',
      features: ['Business Process Automation', 'ERP & CRM Systems', 'Data Management Solutions', 'Third-Party Integrations', 'Scalable Architecture']
    },
    {
      icon: 'fas fa-sync-alt',
      iconColor: '#f59e0b',
      bgColor: 'rgba(245,158,11,0.1)',
      title: 'App Rewrite & Modernization',
      desc: 'Transform your outdated legacy applications into modern, scalable, and maintainable systems built with current best practices.',
      features: ['Legacy Code Migration', 'Technology Stack Upgrade', 'Performance Improvement', 'Security Hardening', 'Zero-Downtime Migration']
    }
  ];

  process = [
    { icon: 'fas fa-comments',    title: 'Discovery',   desc: 'Understanding your goals, requirements, and vision.' },
    { icon: 'fas fa-pencil-ruler', title: 'Planning',    desc: 'Architecture design and project roadmap creation.' },
    { icon: 'fas fa-code',        title: 'Development', desc: 'Agile development with regular progress updates.' },
    { icon: 'fas fa-vials',       title: 'Testing',     desc: 'Thorough QA testing across all platforms and devices.' },
    { icon: 'fas fa-rocket',      title: 'Deployment',  desc: 'Smooth deployment and post-launch support.' }
  ];

  whyUs = [
    { icon: 'fas fa-star',         title: 'Quality First',         desc: 'Every line of code is written with precision and care to meet the highest standards.' },
    { icon: 'fas fa-bolt',         title: 'Fast Delivery',         desc: 'We move quickly without sacrificing quality, hitting milestones consistently.' },
    { icon: 'fas fa-lock',         title: 'Secure by Design',      desc: 'Security is baked in from day one, not added as an afterthought.' },
    { icon: 'fas fa-expand-arrows-alt', title: 'Scalable Solutions', desc: 'We architect systems that can grow seamlessly with your business needs.' },
    { icon: 'fas fa-headset',      title: '24/7 Support',          desc: 'Ongoing maintenance and responsive support whenever you need it.' },
    { icon: 'fas fa-globe',        title: 'Global Reach',          desc: 'Remote-first with clients across the globe — location is never a barrier.' }
  ];
}
