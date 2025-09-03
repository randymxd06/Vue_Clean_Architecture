import type { Product } from "@/domain/entities/products/Product"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"

export class UpdateProduct {
    constructor(private readonly productRepository: ProductRepository) {}

    execute(product: Product): Promise<Product> {
        return this.productRepository.updateProduct(product)
    }
}
