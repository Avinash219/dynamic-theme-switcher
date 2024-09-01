import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private activeTheme: string;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.activeTheme = localStorage.getItem('theme') || 'light-theme';
    this.setTheme(this.activeTheme); // Initialize with saved or default theme
  }

  setTheme(theme: string): void {
    this.renderer.removeClass(document.body, this.activeTheme);
    this.renderer.addClass(document.body, theme);
    this.activeTheme = theme;
    localStorage.setItem('theme', theme); // Persist theme selection in local storage
  }

  getTheme(): string {
    return this.activeTheme;
  }
}
