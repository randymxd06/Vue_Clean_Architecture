import axios, { type AxiosError, type AxiosInstance } from "axios"
import type { HttpClient } from "./HttpClient"

interface ErrorResponse {
    message: string
}

export class AxiosClient implements HttpClient {
    private readonly client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
            },
        })

        /**=============================================
     * INTERCEPTOR FOR CENTRALIZED ERROR HANDLING
    ================================================*/
        this.client.interceptors.response.use(
            response => response,
            (error: AxiosError<ErrorResponse>) => {
                throw new Error(error.response?.data?.message ?? error.message)
            },
        )
    }

    async get<T>(url: string): Promise<T> {
        const res = await this.client.get<T>(url)
        return res.data
    }

    async post<T, U = unknown>(url: string, body: U): Promise<T> {
        const res = await this.client.post<T>(url, body)
        return res.data
    }

    async put<T, U = unknown>(url: string, body: U): Promise<T> {
        const res = await this.client.put<T>(url, body)
        return res.data
    }

    async patch<T, U = unknown>(url: string, body: U): Promise<T> {
        const res = await this.client.patch<T>(url, body)
        return res.data
    }

    async delete<T>(url: string): Promise<T> {
        const res = await this.client.delete<T>(url)
        return res.data
    }
}
