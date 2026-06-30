import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Velora Technology Solutions | Web Design & Development',
      description: 'Velora builds modern websites, custom software, and digital experiences that help businesses grow online.',
      keywords: 'web development, custom software, Angular, TypeScript, UI/UX design, digital strategy'
    },
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    data: {
      title: 'About Velora | Modern Software & Product Development',
      description: 'Learn about Velora’s mission, values, and approach to building polished digital products.',
      keywords: 'about velora, software development team, product development, digital agency'
    },
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    data: {
      title: 'Skills & Expertise | Velora Technology Solutions',
      description: 'Explore Velora’s expertise in Angular, TypeScript, web development, UI/UX, and scalable digital products.',
      keywords: 'Angular, TypeScript, web development, UI/UX, frontend development, software engineering'
    },
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'services',
    data: {
      title: 'Services | Web Design, Development & Custom Software',
      description: 'Discover Velora’s services for web design, frontend development, custom software, and digital strategy.',
      keywords: 'web design, frontend development, custom software, digital strategy, mobile app development'
    },
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'projects',
    data: {
      title: 'Projects | Real-World Work by Velora',
      description: 'Browse Velora’s recent projects showcasing modern websites, apps, and digital product experiences.',
      keywords: 'portfolio projects, web applications, software projects, app development portfolio'
    },
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    data: {
      title: 'Contact Velora | Let’s Build Something Great',
      description: 'Get in touch with Velora to start your next web, software, or product development project.',
      keywords: 'contact velora, web development contact, software project inquiry, digital agency contact'
    },
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
