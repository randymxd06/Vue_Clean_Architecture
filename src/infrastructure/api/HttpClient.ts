export interface HttpClient {
    get<T>(url: string): Promise<T>
    post<T, U = unknown>(url: string, body: U): Promise<T>
    put<T, U = unknown>(url: string, body: U): Promise<T>
    patch<T, U = unknown>(url: string, body: U): Promise<T>
    delete<T>(url: string): Promise<T>
}
