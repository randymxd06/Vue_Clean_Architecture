import { describe, it, expect, vi, beforeEach } from "vitest"
import { UpdateProduct } from "../UpdateProduct"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { Product } from "@/domain/entities/products/Product"

describe("UpdateProduct", () => {
    let updateProduct: UpdateProduct
    let mockProductRepository: ProductRepository

    const originalProduct: Product = {
        id: "123",
        name: "Original Product",
        description: "Original Description",
        price: 99.99,
        stock: 10,
        category: "Original Category",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01"),
    }

    const updatedProduct: Product = {
        id: "123",
        name: "Updated Product",
        description: "Updated Description",
        price: 149.99,
        stock: 15,
        category: "Updated Category",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-02"),
    }

    beforeEach(() => {
        mockProductRepository = {
            getProducts: vi.fn(),
            getProductById: vi.fn(),
            createProduct: vi.fn(),
            updateProduct: vi.fn(),
            deleteProduct: vi.fn(),
        }
        updateProduct = new UpdateProduct(mockProductRepository)
    })

    /**=======================================
     * SHOULD UPDATE A PRODUCT SUCCESSFULLY
    ==========================================*/
    it("should update product successfully", async () => {
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(updatedProduct)
        const result = await updateProduct.execute(updatedProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(updatedProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledTimes(1)
        expect(result).toEqual(updatedProduct)
    })

    /**==================================
     * SHOULD HANDLE REPOSITORY ERRORS
    =====================================*/
    it("should handle repository errors", async () => {
        const errorMessage = "Failed to update product"
        vi.mocked(mockProductRepository.updateProduct).mockRejectedValue(new Error(errorMessage))
        await expect(updateProduct.execute(updatedProduct)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(updatedProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledTimes(1)
    })

    /**========================================
     * SHOULD HANDLE PRODUCT NOT FOUND ERROR
    ===========================================*/
    it("should handle product not found error", async () => {
        const nonExistentProduct: Product = {
            id: "non-existent",
            name: "Non Existent Product",
            price: 100,
            stock: 5,
        }
        const errorMessage = "Product with id 'non-existent' not found"
        vi.mocked(mockProductRepository.updateProduct).mockRejectedValue(new Error(errorMessage))
        await expect(updateProduct.execute(nonExistentProduct)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(nonExistentProduct)
    })

    /**==========================================
     * SHOULD UPDATE PRODUCT WITH PARTIAL DATA
    =============================================*/
    it("should update product with partial data", async () => {
        const partialProduct: Product = {
            id: "123",
            name: "Partially Updated Product",
            price: 199.99,
            stock: 20,
        }
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(partialProduct)
        const result = await updateProduct.execute(partialProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(partialProduct)
        expect(result).toEqual(partialProduct)
        expect(result.id).toBe("123")
        expect(result.name).toBe("Partially Updated Product")
        expect(result.price).toBe(199.99)
        expect(result.stock).toBe(20)
    })

    /**============================================
     * SHOULD UPDATE PRODUCT WITH ALL PROPERTIES
    ===============================================*/
    it("should update product with all properties", async () => {
        const completeProduct: Product = {
            id: "456",
            name: "Complete Updated Product",
            description: "Complete updated description",
            price: 299.99,
            stock: 50,
            category: "Premium Category",
            createdAt: new Date("2025-01-01T10:00:00Z"),
            updatedAt: new Date("2025-01-03T15:30:00Z"),
        }
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(completeProduct)
        const result = await updateProduct.execute(completeProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(completeProduct)
        expect(result).toEqual(completeProduct)
        expect(result).toHaveProperty("id", "456")
        expect(result).toHaveProperty("name", "Complete Updated Product")
        expect(result).toHaveProperty("description", "Complete updated description")
        expect(result).toHaveProperty("price", 299.99)
        expect(result).toHaveProperty("stock", 50)
        expect(result).toHaveProperty("category", "Premium Category")
        expect(result).toHaveProperty("createdAt")
        expect(result).toHaveProperty("updatedAt")
    })

    /**===================================
     * SHOULD PRESERVE ID WHEN UPDATING
    ======================================*/
    it("should preserve id when updating", async () => {
        const productWithDifferentData: Product = {
            ...originalProduct,
            name: "Different Name",
            price: 1000,
        }
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(productWithDifferentData)
        const result = await updateProduct.execute(productWithDifferentData)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(productWithDifferentData)
        expect(result.id).toBe(originalProduct.id)
        expect(result.name).toBe("Different Name")
        expect(result.price).toBe(1000)
    })

    /**==================================
     * SHOULD HANDLE ZERO STOCK UPDATE
    =====================================*/
    it("should handle zero stock update", async () => {
        const zeroStockProduct: Product = {
            ...originalProduct,
            stock: 0,
        }
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(zeroStockProduct)
        const result = await updateProduct.execute(zeroStockProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(zeroStockProduct)
        expect(result.stock).toBe(0)
    })

    /**======================================
     * SHOULD HANDLE NEGATIVE PRICE UPDATE
    =========================================*/
    it("should handle negative price update", async () => {
        const negativePriceProduct: Product = {
            ...originalProduct,
            price: -50,
        }
        vi.mocked(mockProductRepository.updateProduct).mockResolvedValue(negativePriceProduct)
        const result = await updateProduct.execute(negativePriceProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(negativePriceProduct)
        expect(result.price).toBe(-50)
    })

    /**===========================================
     * SHOULD HANDLE DATABASE CONNECTION ERRORS
    ==============================================*/
    it("should handle database connection errors", async () => {
        const errorMessage = "Database connection failed"
        vi.mocked(mockProductRepository.updateProduct).mockRejectedValue(new Error(errorMessage))
        await expect(updateProduct.execute(updatedProduct)).rejects.toThrow(errorMessage)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledWith(updatedProduct)
        expect(mockProductRepository.updateProduct).toHaveBeenCalledTimes(1)
    })
})
