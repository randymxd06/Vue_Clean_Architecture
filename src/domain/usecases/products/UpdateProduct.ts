import type { Product } from "@/domain/entities/Product"
import type { ProductRepository } from "@/domain/repositories/ProductRepository"

export class UpdateProduct {
    constructor(private readonly productRepository: ProductRepository) {}

    execute(product: Product): Promise<Product> {
        return this.productRepository.updateProduct(product)
    }
}
