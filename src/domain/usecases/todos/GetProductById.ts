import type { Product } from "@/domain/entities/Product";
import type { ProductRepository } from "@/domain/repositories/ProductRepository";

export class GetProductById {
	constructor(private readonly productRepository: ProductRepository) {}

	execute(id: string): Promise<Product> {
		return this.productRepository.getProductById(id);
	}
}
