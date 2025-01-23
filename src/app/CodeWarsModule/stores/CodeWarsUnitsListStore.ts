import { CodeWarsUnitModel } from '../models/CodeWarsModel.ts';
import { makeAutoObservable } from 'mobx';

class List {
  data: CodeWarsUnitModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setList(data: CodeWarsUnitModel[]) {
    this.data = data;
  }

  clear = (): void => {
    this.setList([]);
  };
}

export const CodeWarsUnitsListStore = new List();
