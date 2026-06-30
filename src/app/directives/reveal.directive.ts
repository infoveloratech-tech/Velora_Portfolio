import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() delay = 0;
  @Input() direction: 'up' | 'left' | 'right' | 'fade' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    const translateMap = {
      up:    'translateY(40px)',
      left:  'translateX(-40px)',
      right: 'translateX(40px)',
      fade:  'translateY(0)'
    };

    el.style.opacity = '0';
    el.style.transform = translateMap[this.direction];
    el.style.transition = `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${this.delay}ms, transform 0.7s cubic-bezier(.22,.68,0,1.2) ${this.delay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translate(0,0)';
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
