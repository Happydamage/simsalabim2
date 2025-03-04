import { makeAutoObservable } from 'mobx';

class ColorThemeStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const ThemeStore = new ColorThemeStore();
