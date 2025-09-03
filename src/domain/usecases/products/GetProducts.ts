import type { Product } from "@/domain/entities/products/Product"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"

export class GetProducts {
    constructor(private readonly productRepository: ProductRepository) {}

    execute(): Promise<Product[]> {
        return this.productRepository.getProducts()
    }
}
