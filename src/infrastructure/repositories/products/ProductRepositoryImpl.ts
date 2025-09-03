import type { Product } from "@/domain/entities/products/Product"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { HttpClient } from "../../api/HttpClient"

export class ProductRepositoryImpl implements ProductRepository {
    private readonly baseUrl = "products"

    constructor(private readonly http: HttpClient) {}

    getProducts(): Promise<Product[]> {
        return this.http.get<Product[]>(this.baseUrl)
    }

    getProductById(id: string): Promise<Product> {
        return this.http.get<Product>(`${this.baseUrl}/${id}`)
    }

    createProduct(product: Omit<Product, "id">): Promise<Product> {
        return this.http.post<Product>(this.baseUrl, product)
    }

    updateProduct(product: Product): Promise<Product> {
        return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product)
    }

    deleteProduct(id: string): Promise<Product> {
        return this.http.delete<Product>(`${this.baseUrl}/${id}`)
    }
}
