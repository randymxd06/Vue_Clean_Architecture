import { describe, it, expect, vi, beforeEach } from "vitest"
import { DeleteProduct } from "../DeleteProduct"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { Product } from "@/domain/entities/products/Product"

describe("DeleteProduct", () => {
    let deleteProduct: DeleteProduct
    let mockProductRepository: ProductRepository

    const mockProduct: Product = {
        id: "123",
        name: "Product to Delete",
        description: "This product will be deleted",
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
        deleteProduct = new DeleteProduct(mockProductRepository)
    })

    /**=======================================
     * SHOULD DELETE A PRODUCT SUCCESSFULLY
    ==========================================*/
    it("should delete product successfully", async () => {
        const productId = "123"
        vi.mocked(mockProductRepository.deleteProduct).mockResolvedValue(mockProduct)
        const result = await deleteProduct.execute(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledTimes(1)
        expect(result).toEqual(mockProduct)
    })

    /**========================================
     * SHOULD HANDLE PRODUCT NOT FOUND ERROR
    ===========================================*/
    it("should handle product not found error", async () => {
        const productId = "non-existent-id"
        const errorMessage = "Product not found"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledTimes(1)
    })

    /**=====================================
     * SHOULD HANDLE DIFFERENT ID FORMATS
    ========================================*/
    it("should handle different id formats", async () => {
        const testCases = ["123", "abc-def-ghi", "product_456", "PROD789"]
        for (const productId of testCases) {
            const expectedProduct = { ...mockProduct, id: productId }
            vi.mocked(mockProductRepository.deleteProduct).mockResolvedValue(expectedProduct)
            const result = await deleteProduct.execute(productId)
            expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
            expect(result.id).toBe(productId)
        }
    })

    /**====================================================
     * SHOULD RETURN DELETED PRODUCT WITH ALL PROPERTIES
    =======================================================*/
    it("should return deleted product with all properties", async () => {
        const productId = "full-product"
        const fullProduct: Product = {
            id: productId,
            name: "Full Product to Delete",
            description: "Complete product that will be deleted",
            price: 299.99,
            stock: 25,
            category: "Electronics",
            createdAt: new Date("2025-01-01T10:00:00Z"),
            updatedAt: new Date("2025-01-02T15:30:00Z"),
        }
        vi.mocked(mockProductRepository.deleteProduct).mockResolvedValue(fullProduct)
        const result = await deleteProduct.execute(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
        expect(result).toEqual(fullProduct)
        expect(result).toHaveProperty("id", productId)
        expect(result).toHaveProperty("name", "Full Product to Delete")
        expect(result).toHaveProperty("description", "Complete product that will be deleted")
        expect(result).toHaveProperty("price", 299.99)
        expect(result).toHaveProperty("stock", 25)
        expect(result).toHaveProperty("category", "Electronics")
        expect(result).toHaveProperty("createdAt")
        expect(result).toHaveProperty("updatedAt")
    })

    /**========================================================
     * SHOULD RETURN DELETED PRODUCT WITH MINIMAL PROPERTIES
    ===========================================================*/
    it("should return deleted product with minimal properties", async () => {
        const productId = "minimal-product"
        const minimalProduct: Product = {
            id: productId,
            name: "Minimal Product",
            price: 50,
            stock: 5,
        }
        vi.mocked(mockProductRepository.deleteProduct).mockResolvedValue(minimalProduct)
        const result = await deleteProduct.execute(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
        expect(result).toEqual(minimalProduct)
        expect(result.id).toBe(productId)
        expect(result.name).toBe("Minimal Product")
        expect(result.price).toBe(50)
        expect(result.stock).toBe(5)
    })

    /**================================
     * SHOULD HANDLE EMPTY STRING ID
    ===================================*/
    it("should handle empty string id", async () => {
        const productId = ""
        const errorMessage = "Invalid product ID"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
    })

    /**===========================================
     * SHOULD HANDLE DATABASE CONNECTION ERRORS
    ==============================================*/
    it("should handle database connection errors", async () => {
        const productId = "123"
        const errorMessage = "Database connection failed"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledTimes(1)
    })

    /**=============================================
     * SHOULD HANDLE CONCURRENT DELETION ATTEMPTS
    ================================================*/
    it("should handle concurrent deletion attempts", async () => {
        const productId = "concurrent-delete"
        const errorMessage = "Product already deleted or modified by another process"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
    })

    /**============================================
     * SHOULD HANDLE CONSTRAINT VIOLATION ERRORS
    ===============================================*/
    it("should handle constraint violation errors", async () => {
        const productId = "referenced-product"
        const errorMessage = "Cannot delete product: referenced by existing orders"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
    })

    /**=====================================
     * SHOULD HANDLE AUTHORIZATION ERRORS
    ========================================*/
    it("should handle authorization errors", async () => {
        const productId = "protected-product"
        const errorMessage = "Insufficient permissions to delete this product"
        vi.mocked(mockProductRepository.deleteProduct).mockRejectedValue(new Error(errorMessage))
        await expect(deleteProduct.execute(productId)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.deleteProduct).toHaveBeenCalledWith(productId)
    })
})
