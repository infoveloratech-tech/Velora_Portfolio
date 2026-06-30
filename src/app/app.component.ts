import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter, map, switchMap } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        switchMap((route) => route.data)
      )
      .subscribe((data) => {
        const title = (data['title'] as string | undefined) ?? 'Velora Technology Solutions';
        const description = (data['description'] as string | undefined) ?? 'Velora Technology Solutions builds modern websites, custom software, mobile apps, and digital experiences.';
        const keywords = (data['keywords'] as string | undefined) ?? 'web development, software development, Angular, TypeScript, mobile apps, UI/UX design';
        const path = this.router.url.split('?')[0].split('#')[0] || '/';
        const canonicalUrl = new URL(path, window.location.origin).toString();

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ name: 'keywords', content: keywords });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:description', content: description });
        this.metaService.updateTag({ name: 'twitter:url', content: canonicalUrl });

        this.setCanonical(canonicalUrl);
        this.injectSchemaMarkup();
        window.scrollTo(0, 0);
      });

    this.injectSchemaMarkup();
  }

  private setCanonical(url: string): void {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private injectSchemaMarkup(): void {
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Velora Technology Solutions',
      url: window.location.origin,
      description: 'Velora Technology Solutions builds modern websites, custom software, and digital experiences for growing businesses.'
    });
    document.head.appendChild(script);
  }
}
