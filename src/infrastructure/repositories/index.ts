import { CreateProduct } from "@/domain/usecases/todos/CreateProduct"
import { DeleteProduct } from "@/domain/usecases/todos/DeleteProduct"
import { GetProducts } from "@/domain/usecases/todos/GetProducts"
import { UpdateProduct } from "@/domain/usecases/todos/UpdateProduct"
import { AxiosClient } from "../api/AxiosClient"
import { ProductRepositoryImpl } from "../repositories/ProductRepositoryImpl"

const httpClient = new AxiosClient()

const productRepository = new ProductRepositoryImpl(httpClient)

export const productUseCases = {
    getProducts: new GetProducts(productRepository),
    createProduct: new CreateProduct(productRepository),
    updateProduct: new UpdateProduct(productRepository),
    deleteProduct: new DeleteProduct(productRepository),
}
