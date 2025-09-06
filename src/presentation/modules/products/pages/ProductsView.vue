<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Product } from "@/domain/entities/products/Product"
import Button from "@/presentation/components/atoms/Button.vue"
import Icon from "@/presentation/components/atoms/Icon.vue"
import { useProductStore } from "../stores/productStore"

/**===========================
 * PRODUCT MANAGEMENT STORE
==============================*/
const productStore = useProductStore()

/**=========
 * STATES
============*/
const isEditing = ref<boolean>(false)
const currentProductId = ref<string | null>(null)

/**=============
 * ON MOUNTED
================*/
onMounted(() => {
    productStore.loadProducts()
})

/**==================
 * HANDLE SUBMIT
 * @returns {void}
=====================*/
const handleSubmit = (): void => {
    /**==================================
   *  IF EDITING, UPDATE THE PRODUCT
   *  OTHERWISE, ADD A NEW PRODUCT
  =====================================*/
    if (isEditing.value && currentProductId.value) {
        const product = {
            ...productStore.newProduct,
            id: currentProductId.value,
        }

        productStore.updateProductItem(product)
    } else {
        productStore.addProduct()
    }

    /**=============
   * RESET FORM
  ================*/
    resetForm()
}

/**===========================
 * EDIT PRODUCT
 * @param {Product} product
 * @returns {void}
==============================*/
const editProduct = (product: Product): void => {
    isEditing.value = true
    currentProductId.value = product.id
    productStore.newProduct = {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
    }
}

/**==================
 * RESET FORM
 * @returns {void}
=====================*/
const resetForm = (): void => {
    isEditing.value = false
    currentProductId.value = null
    productStore.resetNewProduct()
}
</script>

<template>

  <!--==============
    PRODUCTS VIEW
  ==================-->
  <main>

    <!--=========
        HEADER
    =============-->
    <header class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Product Management
        </h1>
      </div>
      <p class="text-gray-500 dark:text-gray-400 mt-1">Manage product inventory</p>
    </header>

    <!--================
        IMPROVED FORM
    ====================-->
    <form @submit.prevent="handleSubmit"
      class="mb-10 p-6 rounded-xl border border-blue-100 dark:border-gray-600 shadow-inner">

      <!--==========================
        CREATION / EDITING HEADER
      ==============================-->
      <section class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {{ isEditing ? '✏️ Edit Product' : '➕ Add New Product' }}
        </h2>
        <span class="px-3 py-1 text-xs font-medium rounded-full"
          :class="isEditing ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'">
          {{ isEditing ? 'Edit Mode' : 'Creation Mode' }}
        </span>
      </section>

      <!--==========
        FORM GRID
      ==============-->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        <!--=============
          PRODUCT NAME
        =================-->
        <article class="space-y-2">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Product Name</label>
          <input name="name" v-model="productStore.newProduct.name"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:text-gray-200 placeholder:text-gray-400 dark:border-gray-600"
            placeholder="Eg: HP EliteBook laptop" required />
        </article>

        <!--==============
          PRODUCT PRICE
        ==================-->
        <article class="space-y-2">
          <label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Price (USD)</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input name="price" v-model.number="productStore.newProduct.price" type="number" min="0" step="0.01"
              class="w-full pl-8 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:text-gray-200 placeholder:text-gray-400 dark:border-gray-600"
              placeholder="0.00" required />
          </div>
        </article>

        <!--==============
          PRODUCT STOCK
        ==================-->
        <article class="space-y-2">
          <label for="stock" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Stock Available</label>
          <input name="stock" v-model.number="productStore.newProduct.stock" type="number" min="0"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:text-gray-200 placeholder:text-gray-400 dark:border-gray-600"
            placeholder="Quantity in stock" required />
        </article>

        <!--=================
          PRODUCT CATEGORY
        =====================-->
        <article class="space-y-2">
          <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Category</label>
          <input name="category" v-model="productStore.newProduct.category"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:text-gray-200 placeholder:text-gray-400 dark:border-gray-600"
            placeholder="E.g.: Electronics" required />
        </article>

      </section>

      <!--====================
        PRODUCT DESCRIPTION
      ========================-->
      <section class="mb-6 space-y-2">
        <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
        <textarea name="description" v-model="productStore.newProduct.description"
          class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:text-gray-200 placeholder:text-gray-400 dark:border-gray-600"
          rows="3" placeholder="Detailed product description..."></textarea>
      </section>

      <!--===========================
        EDITION / CREATION BUTTONS
      ===============================-->
      <section class="flex gap-3">
        <Button type="submit" variant="primary">
          <Icon v-if="!isEditing" name="plus" size="sm" />
          <Icon v-else name="check" size="sm" />
          <span>{{ isEditing ? 'Update Product' : 'Add Product' }}</span>
        </Button>
        <Button v-if="isEditing" @click="resetForm" type="button" variant="outline">
          <Icon name="x" size="sm" />
          <span>Cancel</span>
        </Button>
      </section>

    </form>

    <!--==================
        LISTING SECTION
    ======================-->
    <section v-if="productStore.loading" class="text-center py-8">
      <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-lg">
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        Cloading products...
      </div>
    </section>

  </main>

</template>