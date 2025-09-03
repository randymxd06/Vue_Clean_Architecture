import { defineStore } from "pinia"
import { ref } from "vue"
import type { Product } from "@/domain/entities/products/Product"
import { productUseCases } from "@/infrastructure/repositories/products"

/**=================================================
 * IMPORT THE REQUIRED USE CASES AND REPOSITORIES
====================================================*/
const { getProducts, createProduct, updateProduct, deleteProduct: removeProduct } = productUseCases

/**====================
 * USE PRODUCT STORE
=======================*/
export const useProductStore = defineStore("product", () => {
    const products = ref<Product[]>([])
    const newProduct = ref<Omit<Product, "id">>({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
    })
    const loading = ref(false)
    const error = ref<string | null>(null)

    /**===========================
     * LOAD PRODUCTS FUNCTION
     * @returns {Promise<void>}
    ==============================*/
    const loadProducts = async (): Promise<void> => {
        loading.value = true
        try {
            products.value = await getProducts.execute()
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.error("Error cargando productos:", e.message)
                error.value = e.message
            } else {
                console.error("Error inesperado:", e)
                error.value = "Error inesperado"
            }
        } finally {
            loading.value = false
        }
    }

    /**===========================
     * ADD PRODUCT FUNCTION
     * @returns {Promise<void>}
    ==============================*/
    const addProduct = async (): Promise<void> => {
        if (!newProduct.value.name.trim()) return
        const product = await createProduct.execute(newProduct.value)
        products.value.push(product)
        resetNewProduct()
    }

    /**===========================
     * UPDATE PRODUCT FUNCTION
     * @param {Product} product
     * @returns {Promise<void>}
    ==============================*/
    const updateProductItem = async (product: Product): Promise<void> => {
        const updatedProduct = await updateProduct.execute(product)
        const index = products.value.findIndex(p => p.id === updatedProduct.id)
        if (index !== -1) {
            products.value[index] = updatedProduct
        }
    }

    /**===========================
     * DELETE PRODUCT FUNCTION
     * @param {string} id
     * @returns {Promise<void>}
    ==============================*/
    const deleteProduct = async (id: string): Promise<void> => {
        await removeProduct.execute(id)
        products.value = products.value.filter(p => p.id !== id)
    }

    /**=============================
     * RESET NEW PRODUCT FUNCTION
    ================================*/
    const resetNewProduct = () => {
        newProduct.value = {
            name: "",
            description: "",
            price: 0,
            stock: 0,
            category: "",
        }
    }

    return {
        products,
        newProduct,
        loading,
        error,
        loadProducts,
        addProduct,
        updateProductItem,
        deleteProduct,
        resetNewProduct,
    }
})
