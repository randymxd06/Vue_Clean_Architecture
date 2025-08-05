import type { Product } from "../entities/Product";

export interface ProductRepository {
	getProducts(): Promise<Product[]>;
	getProductById(id: string): Promise<Product>;
	createProduct(product: Omit<Product, "id">): Promise<Product>;
	updateProduct(product: Product): Promise<Product>;
	deleteProduct(id: string): Promise<Product>;
}
