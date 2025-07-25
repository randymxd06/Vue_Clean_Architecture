import type { HttpClient } from "../HttpClient";

export class FetchClient implements HttpClient {

  private readonly baseUrl: string;
  private readonly headers: HeadersInit;

  constructor(
    baseUrl: string = 'http://localhost:3000/api/v1/', // TODO: USAR VARIABLE DE ENTORNO //
    headers: HeadersInit = { 'Content-Type': 'application/json' }
  ) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private buildUrl(path: string): string {
    return `${this.baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  }

  async get<T>(url: string): Promise<T> {
    const res = await fetch(this.buildUrl(url));
    return res.json();
  }

  async post<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await fetch(this.buildUrl(url), {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async put<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await fetch(this.buildUrl(url), {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async patch<T, U = unknown>(url: string, body: U): Promise<T> {
    const res = await fetch(this.buildUrl(url), {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async delete<T>(url: string): Promise<T> {
    const res = await fetch(this.buildUrl(url), {
      method: 'DELETE',
      headers: this.headers,
    });
    return res.json();
  }
  
}
