import { CreateProduct } from "@/domain/usecases/products/CreateProduct"
import { DeleteProduct } from "@/domain/usecases/products/DeleteProduct"
import { GetProducts } from "@/domain/usecases/products/GetProducts"
import { UpdateProduct } from "@/domain/usecases/products/UpdateProduct"
import { AxiosClient } from "../../api/AxiosClient"
import { ProductRepositoryImpl } from "./ProductRepositoryImpl"

const httpClient = new AxiosClient()

const productRepository = new ProductRepositoryImpl(httpClient)

export const productUseCases = {
    getProducts: new GetProducts(productRepository),
    createProduct: new CreateProduct(productRepository),
    updateProduct: new UpdateProduct(productRepository),
    deleteProduct: new DeleteProduct(productRepository),
}
