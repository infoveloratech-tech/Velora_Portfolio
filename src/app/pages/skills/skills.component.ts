import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Skill {
  name: string;
  iconType: 'svg' | 'fa';
  svgPath?: string;
  faIcon?: string;
  color: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('barRef') bars!: QueryList<ElementRef<HTMLElement>>;

  skills: Skill[] = [
    { name: 'WordPress',  iconType: 'svg', svgPath: 'assets/images/skill/wordpress-original.svg',               color: '#494949', level: 90 },
    { name: 'HTML5',      iconType: 'svg', svgPath: 'assets/images/skill/html5-original.svg',           color: '#e34f26', level: 95 },
    { name: 'CSS3',       iconType: 'svg', svgPath: 'assets/images/skill/css3-original.svg',             color: '#1572b6', level: 92 },
    { name: 'Bootstrap',  iconType: 'svg', svgPath: 'assets/images/skill/bootstrap-original.svg',   color: '#7952b3', level: 88 },
    { name: 'Angular',    iconType: 'svg', svgPath: 'assets/images/skill/angularjs-original.svg',   color: '#dd0031', level: 90 },
    { name: 'TypeScript', iconType: 'svg', svgPath: 'assets/images/skill/typescript-original.svg', color: '#3178c6', level: 88 },
    { name: 'C#',         iconType: 'svg', svgPath: 'assets/images/skill/csharp-original.svg',         color: '#239120', level: 85 },
    { name: 'ASP.NET',    iconType: 'svg', svgPath: 'assets/images/skill/dotnetcore-original.svg', color: '#512bd4', level: 85 },
    { name: 'MySQL',      iconType: 'svg', svgPath: 'assets/images/skill/mysql-original.svg',           color: '#4479a1', level: 82 },
    { name: 'Git',        iconType: 'svg', svgPath: 'assets/images/skill/git-original.svg', color: '#f05032', level: 90 },
    { name: 'Canva',      iconType: 'svg', svgPath: 'assets/images/skill/Canva-Logo.png', color: '#2490d5', level: 90 },
    { name: 'SEO',      iconType: 'svg', svgPath: 'assets/images/skill/seo-logo.png', color: '#f5be1e', level: 90 }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          const fill = bar.querySelector('.skill-fill') as HTMLElement;
          const level = bar.getAttribute('data-level') || '0';
          const color = bar.getAttribute('data-color') || '#1a6dff';
          fill.style.width = level + '%';
          fill.style.background = color;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    this.bars.forEach(ref => observer.observe(ref.nativeElement));
  }
}
