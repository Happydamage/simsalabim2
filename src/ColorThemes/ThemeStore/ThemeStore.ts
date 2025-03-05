import { makeAutoObservable } from 'mobx';
import { Theme } from '@mui/material';
import { darkTheme, lightTheme } from '../ColorThemes.ts';

// class ColorThemeStore {
//   theme: Theme = lightTheme;
//
//   constructor() {
//     makeAutoObservable(this);
//   }
//
//   toggleTheme(): void {
//     this.theme = this.theme === lightTheme ? darkTheme : lightTheme;
//   }
//
//   setTheme(): void {
//     this.theme = darkTheme;
//   }
// }
//
// export const ThemeStore = new ColorThemeStore();

class ThemeStore {
  theme: Theme = lightTheme;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme(): void {
    this.theme = this.theme === lightTheme ? darkTheme : lightTheme;
  }
}

export const themeStore = new ThemeStore();
