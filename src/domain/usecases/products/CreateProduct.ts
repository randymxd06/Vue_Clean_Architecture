import type { Product } from "@/domain/entities/products/Product"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"

export class CreateProduct {
    constructor(private readonly productRepository: ProductRepository) {}

    execute(product: Omit<Product, "id">): Promise<Product> {
        return this.productRepository.createProduct(product)
    }
}
