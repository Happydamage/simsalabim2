import { makeAutoObservable } from 'mobx';

class ThemeStore {
  theme: 'light' | 'dark' = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme === 'light' ? '1' : '0');
    console.log(localStorage.getItem('theme'));
  }
}

export const themeStore = new ThemeStore();
