import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('counter') counterEls!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset['target'] || '0', 10);
          this.animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    this.counterEls.forEach(ref => observer.observe(ref.nativeElement));
  }

  private animateCounter(el: HTMLElement, target: number) {
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
