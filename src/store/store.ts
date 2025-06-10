import { IUser } from '../models/IUser.ts';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService.ts';
import axios, { AxiosError } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse.ts';
import { API_URL } from '../http';
import { toast } from 'react-toastify';

export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      toast(response.statusText);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast(e.response?.data.message || e.message);
      }
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      toast(response.statusText);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast(e.response?.data.message || e.message);
      }
    }
  }

  async logout(): Promise<void> {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast(e.response?.data.message || e.message);
      }
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      toast(response.statusText);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast(e.response?.data.message || e.message);
      }
    }
  }
}
