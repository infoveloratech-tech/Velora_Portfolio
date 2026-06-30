import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Velora Technology Solutions',
      description: 'Velora Technology Solutions provides Web Development, Mobile Apps, Cloud Solutions and AI Services.',
      keywords: 'Velora, Angular, .NET, SQL Server, AI, Software Company, Web Development'
    },
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    data: {
      title: 'About Velora Technology Solutions',
      description: 'Learn about Velora Technology Solutions and its expertise in modern software, web, and AI-driven products.',
      keywords: 'about Velora, software company, web development, AI services, cloud solutions'
    },
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    data: {
      title: 'Skills & Expertise | Velora',
      description: 'Explore Velora’s expertise in Angular, .NET, SQL Server, cloud solutions, AI services, and web development.',
      keywords: 'Angular, .NET, SQL Server, AI, cloud solutions, software development'
    },
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'services',
    data: {
      title: 'Services | Velora Technology Solutions',
      description: 'Discover Velora’s services for web development, mobile apps, cloud solutions, and AI-powered business solutions.',
      keywords: 'web development services, mobile app development, cloud solutions, AI services, software company'
    },
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'projects',
    data: {
      title: 'Projects | Velora Technology Solutions',
      description: 'Browse Velora’s recent projects showcasing modern websites, applications, and AI-enabled digital solutions.',
      keywords: 'portfolio projects, web applications, software projects, AI solutions, app development'
    },
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    data: {
      title: 'Contact Velora Technology Solutions',
      description: 'Get in touch with Velora Technology Solutions to start your next web, app, cloud, or AI project.',
      keywords: 'contact Velora, software company contact, web development inquiry, AI services contact'
    },
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
