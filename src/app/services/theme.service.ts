import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem('velora-theme');
    if (saved === 'dark') {
      this.isDark.set(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      localStorage.setItem('velora-theme', dark ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.set(!this.isDark());
  }
}
