import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [NgFor],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  themes = ['light-theme', 'dark-theme'];

  constructor(private themeService: ThemeService) {}

  switchTheme(event: any): void {
    const theme = (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(theme);
  }

  get currentTheme(): string {
    return this.themeService.getTheme();
  }
}
