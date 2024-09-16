import axios from 'axios';
import { CodeWarsUnitModel } from '../models/CodeWarsModel.ts';

export class CodeWarsServices {
  static list = async () => {
    try {
      return axios
        .get<CodeWarsUnitModel[]>('http://localhost:3000/codewars')
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  static create = async (data: CodeWarsUnitModel) => {
    try {
      return axios.post<CodeWarsUnitModel>('http://localhost:3000/codewars', {
        data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // static edit = async (id: string) => {
  //   try {
  //     return axios.get<>(
  //       `http://localhost:3000/codewars/${id}`
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
}
