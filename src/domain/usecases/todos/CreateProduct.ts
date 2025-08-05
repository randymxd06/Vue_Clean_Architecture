import type { Product } from "@/domain/entities/Product";
import type { ProductRepository } from "@/domain/repositories/ProductRepository";

export class CreateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(product: Omit<Product, "id">): Promise<Product> {
    return this.productRepository.createProduct(product);
  }
}