import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'dark-mode';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const isDarkMode = document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem(this.darkModeKey, JSON.stringify(isDarkMode));
  }

  private loadTheme(): void {
    const isDarkMode = JSON.parse(localStorage.getItem(this.darkModeKey) || 'false');
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    }
  }

  isDarkMode() {
    return JSON.parse(localStorage.getItem(this.darkModeKey) || 'false');
  }
}
