import type { HttpClient } from './HttpClient';

export class FetchHttpClient implements HttpClient {

  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json();
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }
  
  async patch<T>(url: string, body: unknown): Promise<T> {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }

  async delete<T>(url: string): Promise<T> {
    const res = await fetch(url, { method: 'DELETE' });
    return res.json();
  }

}