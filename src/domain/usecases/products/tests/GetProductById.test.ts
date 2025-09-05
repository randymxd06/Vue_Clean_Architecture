import { describe, it, expect, vi, beforeEach } from "vitest"
import { GetProductById } from "../GetProductById"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { Product } from "@/domain/entities/products/Product"

describe("GetProductById", () => {
    let getProductById: GetProductById
    let mockProductRepository: ProductRepository

    const mockProduct: Product = {
        id: "123",
        name: "Test Product",
        description: "Test Description",
        price: 99.99,
        stock: 10,
        category: "Test Category",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01"),
    }

    beforeEach(() => {
        mockProductRepository = {
            getProducts: vi.fn(),
            getProductById: vi.fn(),
            createProduct: vi.fn(),
            updateProduct: vi.fn(),
            deleteProduct: vi.fn(),
        }
        getProductById = new GetProductById(mockProductRepository)
    })

    /**=============================================
     * SHOULD RETURN A PRODUCT BY ID SUCCESSFULLY
    ================================================*/
    it("should return product by id successfully", async () => {
        const productId = "123"
        vi.mocked(mockProductRepository.getProductById).mockResolvedValue(mockProduct)
        const result = await getProductById.execute(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledTimes(1)
        expect(result).toEqual(mockProduct)
    })

    /**=========================================================
     * SHOULD HANDLE REPOSITORY ERRORS WHEN PRODUCT NOT FOUND
    ============================================================*/
    it("should handle repository errors when product not found", async () => {
        const productId = "non-existent-id"
        const errorMessage = "Product not found"
        vi.mocked(mockProductRepository.getProductById).mockRejectedValue(new Error(errorMessage))
        await expect(getProductById.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledTimes(1)
    })

    /**=====================================
     * SHOULD HANDLE DIFFERENT ID FORMATS
    ========================================*/
    it("should handle different id formats", async () => {
        const testCases = ["123", "abc-def-ghi", "product_456", "PROD789"]
        for (const productId of testCases) {
            const expectedProduct = { ...mockProduct, id: productId }
            vi.mocked(mockProductRepository.getProductById).mockResolvedValue(expectedProduct)
            const result = await getProductById.execute(productId)
            expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
            expect(result.id).toBe(productId)
        }
    })

    /**==========================================
     * SHOULD RETURN PRODUCT WITH MINIMAL DATA
    =============================================*/
    it("should return product with minimal data", async () => {
        const productId = "minimal-product"
        const minimalProduct: Product = {
            id: productId,
            name: "Minimal Product",
            price: 50,
            stock: 5,
        }
        vi.mocked(mockProductRepository.getProductById).mockResolvedValue(minimalProduct)
        const result = await getProductById.execute(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
        expect(result).toEqual(minimalProduct)
        expect(result.id).toBe(productId)
        expect(result.name).toBe("Minimal Product")
        expect(result.price).toBe(50)
        expect(result.stock).toBe(5)
    })

    /**============================================
     * SHOULD RETURN PRODUCT WITH ALL PROPERTIES
    ===============================================*/
    it("should return product with all properties", async () => {
        const productId = "full-product"
        const fullProduct: Product = {
            id: productId,
            name: "Full Product",
            description: "Complete product description",
            price: 199.99,
            stock: 25,
            category: "Electronics",
            createdAt: new Date("2025-01-01T10:00:00Z"),
            updatedAt: new Date("2025-01-02T15:30:00Z"),
        }
        vi.mocked(mockProductRepository.getProductById).mockResolvedValue(fullProduct)
        const result = await getProductById.execute(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
        expect(result).toEqual(fullProduct)
        expect(result).toHaveProperty("id", productId)
        expect(result).toHaveProperty("name", "Full Product")
        expect(result).toHaveProperty("description", "Complete product description")
        expect(result).toHaveProperty("price", 199.99)
        expect(result).toHaveProperty("stock", 25)
        expect(result).toHaveProperty("category", "Electronics")
        expect(result).toHaveProperty("createdAt")
        expect(result).toHaveProperty("updatedAt")
    })

    /**================================
     * SHOULD HANDLE EMPTY STRING ID
    ===================================*/
    it("should handle empty string id", async () => {
        const productId = ""
        const errorMessage = "Invalid product ID"
        vi.mocked(mockProductRepository.getProductById).mockRejectedValue(new Error(errorMessage))
        await expect(getProductById.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
    })

    /**===========================================
     * SHOULD HANDLE DATABASE CONNECTION ERRORS
    ==============================================*/
    it("should handle database connection errors", async () => {
        const productId = "123"
        const errorMessage = "Database connection failed"
        vi.mocked(mockProductRepository.getProductById).mockRejectedValue(new Error(errorMessage))
        await expect(getProductById.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.getProductById).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.getProductById).toHaveBeenCalledTimes(1)
    })
})
