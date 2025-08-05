import type { Product } from "@/domain/entities/Product";
import type { ProductRepository } from "@/domain/repositories/ProductRepository";

export class GetProducts {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}