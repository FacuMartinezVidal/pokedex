import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapater.interface';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (err) {
      throw new Error('Erros - Check logs');
    }
  }
}
