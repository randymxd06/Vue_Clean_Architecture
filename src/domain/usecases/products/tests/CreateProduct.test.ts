import { describe, it, expect, vi, beforeEach } from "vitest"
import { CreateProduct } from "../CreateProduct"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { Product } from "@/domain/entities/products/Product"

describe("CreateProduct", () => {
    let createProduct: CreateProduct
    let mockProductRepository: ProductRepository

    const mockProduct: Omit<Product, "id"> = {
        name: "Test Product",
        description: "Test Description",
        price: 99.99,
        stock: 10,
        category: "Test Category",
    }

    const expectedProduct: Product = {
        id: "123",
        ...mockProduct,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    beforeEach(() => {
        mockProductRepository = {
            getProducts: vi.fn(),
            getProductById: vi.fn(),
            createProduct: vi.fn(),
            updateProduct: vi.fn(),
            deleteProduct: vi.fn(),
        }
        createProduct = new CreateProduct(mockProductRepository)
    })

    /**=======================================
     * SHOULD CREATE A PRODUCT SUCCESSFULLY
    ==========================================*/
    it("should create a product successfully", async () => {
        vi.mocked(mockProductRepository.createProduct).mockResolvedValue(expectedProduct)
        const result = await createProduct.execute(mockProduct)
        expect(mockProductRepository.createProduct).toHaveBeenCalledWith(mockProduct)
        expect(mockProductRepository.createProduct).toHaveBeenCalledTimes(1)
        expect(result).toEqual(expectedProduct)
    })

    /**==================================
     * SHOULD HANDLE REPOSITORY ERRORS
    =====================================*/
    it("should handle repository errors", async () => {
        const errorMessage = "Database connection failed"
        vi.mocked(mockProductRepository.createProduct).mockRejectedValue(new Error(errorMessage))
        await expect(createProduct.execute(mockProduct)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.createProduct).toHaveBeenCalledWith(mockProduct)
        expect(mockProductRepository.createProduct).toHaveBeenCalledTimes(1)
    })

    /**============================================
     * SHOULD CREATE A PRODUCT WITH MINIMAL DATA
    ===============================================*/
    it("should create a product with minimal data", async () => {
        const minimalProduct: Omit<Product, "id"> = {
            name: "Minimal Product",
            price: 50,
            stock: 5,
        }
        const expectedMinimalProduct: Product = {
            id: "456",
            ...minimalProduct,
        }
        vi.mocked(mockProductRepository.createProduct).mockResolvedValue(expectedMinimalProduct)
        const result = await createProduct.execute(minimalProduct)
        expect(mockProductRepository.createProduct).toHaveBeenCalledWith(minimalProduct)
        expect(result).toEqual(expectedMinimalProduct)
    })

    /**=======================================================
     * SHOULD PRESERVE ALL PRODUCT PROPERTIES WHEN CREATING
    ==========================================================*/
    it("should preserve all product properties when creating", async () => {
        const complexProduct: Omit<Product, "id"> = {
            name: "Complex Product",
            description: "A complex product with all properties",
            price: 199.99,
            stock: 25,
            category: "Electronics",
        }
        const expectedComplexProduct: Product = {
            id: "789",
            ...complexProduct,
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
        }
        vi.mocked(mockProductRepository.createProduct).mockResolvedValue(expectedComplexProduct)
        const result = await createProduct.execute(complexProduct)
        expect(mockProductRepository.createProduct).toHaveBeenCalledWith(complexProduct)
        expect(result).toEqual(expectedComplexProduct)
        expect(result.name).toBe(complexProduct.name)
        expect(result.description).toBe(complexProduct.description)
        expect(result.price).toBe(complexProduct.price)
        expect(result.stock).toBe(complexProduct.stock)
        expect(result.category).toBe(complexProduct.category)
    })
})
