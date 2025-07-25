import axios, { type AxiosInstance } from 'axios';
import type { HttpClient } from '../HttpClient';

export class AxiosClient implements HttpClient {

  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000/api/v1/', // TODO: USAR VARIABLE DE ENTORNO //
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(url: string): Promise<T> {
    const res = await this.client.get<T>(url);
    return res.data;
  }

  async post<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await this.client.post<T>(url, body);
    return res.data;
  }

  async put<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await this.client.put<T>(url, body);
    return res.data;
  }

  async patch<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await this.client.patch<T>(url, body);
    return res.data;
  }

  async delete<T>(url: string): Promise<T> {
    const res = await this.client.delete<T>(url);
    return res.data;
  }
  
}
