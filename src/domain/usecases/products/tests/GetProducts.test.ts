import { describe, it, expect, vi, beforeEach } from "vitest"
import { GetProducts } from "../GetProducts"
import type { ProductRepository } from "@/domain/repositories/products/ProductRepository"
import type { Product } from "@/domain/entities/products/Product"

describe("GetProducts", () => {
    let getProducts: GetProducts
    let mockProductRepository: ProductRepository

    const mockProductList: Product[] = [
        {
            id: "1",
            name: "Product 1",
            description: "Description 1",
            price: 100,
            stock: 10,
            category: "Category 1",
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
        },
        {
            id: "2",
            name: "Product 2",
            description: "Description 2",
            price: 200,
            stock: 20,
            category: "Category 2",
            createdAt: new Date("2025-01-02"),
            updatedAt: new Date("2025-01-02"),
        },
        {
            id: "3",
            name: "Product 3",
            price: 300,
            stock: 30,
            createdAt: new Date("2025-01-03"),
            updatedAt: new Date("2025-01-03"),
        },
    ]

    beforeEach(() => {
        mockProductRepository = {
            getProducts: vi.fn(),
            getProductById: vi.fn(),
            createProduct: vi.fn(),
            updateProduct: vi.fn(),
            deleteProduct: vi.fn(),
        }
        getProducts = new GetProducts(mockProductRepository)
    })

    /**==========================================
     * SHOULD RETURN ALL PRODUCTS SUCCESSFULLY
    =============================================*/
    it("should return all products successfully", async () => {
        vi.mocked(mockProductRepository.getProducts).mockResolvedValue(mockProductList)
        const result = await getProducts.execute()
        expect(mockProductRepository.getProducts).toHaveBeenCalledTimes(1)
        expect(result).toEqual(mockProductList)
        expect(result).toHaveLength(3)
    })

    /**===================================================
     * SHOULD RETURN EMPTY ARRAY WHEN NO PRODUCTS EXIST
    ======================================================*/
    it("should return empty array when no products exist", async () => {
        vi.mocked(mockProductRepository.getProducts).mockResolvedValue([])
        const result = await getProducts.execute()
        expect(mockProductRepository.getProducts).toHaveBeenCalledTimes(1)
        expect(result).toEqual([])
        expect(result).toHaveLength(0)
    })

    /**==================================
     * SHOULD HANDLE REPOSITORY ERRORS
    =====================================*/
    it("should handle repository errors", async () => {
        const errorMessage = "Failed to fetch products"
        vi.mocked(mockProductRepository.getProducts).mockRejectedValue(new Error(errorMessage))
        await expect(getProducts.execute()).rejects.toThrow(errorMessage)
        expect(mockProductRepository.getProducts).toHaveBeenCalledTimes(1)
    })

    /**=================================================================
     * SHOULD RETURN PRODUCTS WITH ALL PROPERTIES EXPECTED PROPERTIES
    ====================================================================*/
    it("should return products with all expected properties", async () => {
        vi.mocked(mockProductRepository.getProducts).mockResolvedValue(mockProductList)
        const result = await getProducts.execute()
        expect(result[0]).toHaveProperty("id")
        expect(result[0]).toHaveProperty("name")
        expect(result[0]).toHaveProperty("price")
        expect(result[0]).toHaveProperty("stock")
        expect(result[0]).toHaveProperty("createdAt")
        expect(result[0]).toHaveProperty("updatedAt")
        expect(result[0]).toHaveProperty("description")
        expect(result[0]).toHaveProperty("category")
    })

    /**====================================
     * SHOULD HANDLE LARGE PRODUCT LISTS
    =======================================*/
    it("should handle large product lists", async () => {
        const largeProductList = Array.from({ length: 1000 }, (_, index) => ({
            id: `product-${index}`,
            name: `Product ${index}`,
            price: index * 10,
            stock: index,
            createdAt: new Date(),
            updatedAt: new Date(),
        }))
        vi.mocked(mockProductRepository.getProducts).mockResolvedValue(largeProductList)
        const result = await getProducts.execute()
        expect(mockProductRepository.getProducts).toHaveBeenCalledTimes(1)
        expect(result).toHaveLength(1000)
        expect(result[0].id).toBe("product-0")
        expect(result[999].id).toBe("product-999")
    })

    /**=========================================
     * SHOULD PRESERVE PRODUCT DATA INTEGRITY
    ============================================*/
    it("should preserve product data integrity", async () => {
        vi.mocked(mockProductRepository.getProducts).mockResolvedValue(mockProductList)
        const result = await getProducts.execute()
        expect(result).toEqual(mockProductList)
        result.forEach((product, index) => {
            expect(product).toEqual(mockProductList[index])
        })
    })
})
