<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Product } from "@/domain/entities/Product"
import { useProductStore } from "../stores/productStore"

const productStore = useProductStore()
const isEditing = ref(false)
const currentProductId = ref<string | null>(null)

onMounted(() => {
    productStore.loadProducts()
})

const handleSubmit = () => {
    if (isEditing.value && currentProductId.value) {
        const product = {
            ...productStore.newProduct,
            id: currentProductId.value,
        }
        productStore.updateProductItem(product)
    } else {
        productStore.addProduct()
    }
    resetForm()
}

const editProduct = (product: Product) => {
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

const resetForm = () => {
    isEditing.value = false
    currentProductId.value = null
    productStore.resetNewProduct()
}
</script>

<template>

  <div class="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-sm">

    <!--=========
        HEADER
    =============-->
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        Product Management
      </h1>
      <p class="text-gray-500 mt-1">Manage product inventory</p>
    </header>

    <!--================
        IMPROVED FORM
    ====================-->
    <form @submit.prevent="handleSubmit" class="mb-10 p-6 rounded-xl border border-blue-100 shadow-inner">

      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-700">
          {{ isEditing ? '✏️ Edit Product' : '➕ Add New Product' }}
        </h2>
        <span class="px-3 py-1 text-xs font-medium rounded-full"
          :class="isEditing ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'">
          {{ isEditing ? 'Edit Mode' : 'Creation Mode' }}
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="space-y-2">
          <label for="name" class="block text-sm font-medium text-gray-700">Product Name</label>
          <input name="name" v-model="productStore.newProduct.name"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            placeholder="Eg: HP EliteBook laptop" required />
        </div>

        <div class="space-y-2">
          <label for="price" class="block text-sm font-medium text-gray-700">Price (USD)</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input name="price" v-model.number="productStore.newProduct.price" type="number" min="0" step="0.01"
              class="w-full pl-8 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="0.00" required />
          </div>
        </div>

        <div class="space-y-2">
          <label for="stock" class="block text-sm font-medium text-gray-700">Stock Available</label>
          <input name="stock" v-model.number="productStore.newProduct.stock" type="number" min="0"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            placeholder="Quantity in stock" required />
        </div>

        <div class="space-y-2">
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <input name="category" v-model="productStore.newProduct.category"
            class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            placeholder="E.g.: Electronics" required />
        </div>
      </div>

      <div class="mb-6 space-y-2">
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" v-model="productStore.newProduct.description"
          class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          rows="3" placeholder="Detailed product description..."></textarea>
      </div>

      <div class="flex gap-3">
        <button type="submit"
          class="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm transition-all flex items-center gap-2 cursor-pointer">
          <svg v-if="!isEditing" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ isEditing ? 'Update Product' : 'Add Product' }}
        </button>
        <button v-if="isEditing" @click="resetForm" type="button"
          class="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </button>
      </div>
    </form>

    <!--==================
        LISTING SECTION
    ======================-->
    <div v-if="productStore.loading" class="text-center py-8">
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
    </div>

    <div v-else-if="productStore.error" class="p-4 mb-6 bg-red-50 border-l-4 border-red-500 rounded">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd" />
        </svg>
        <span class="font-medium text-red-700">Error:</span>
        <span class="ml-1 text-red-600">{{ productStore.error }}</span>
      </div>
    </div>

    <div v-else>
      <div v-if="productStore.products.length > 0" class="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in productStore.products" :key="product.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                    <div class="text-sm text-gray-500 line-clamp-1">{{ product.description || 'No description' }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                ${{ (product.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ product.stock }} units
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ product.category || '-' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editProduct(product)" class="text-indigo-600 hover:text-indigo-900 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button @click="productStore.deleteProduct(product.id)" class="text-red-600 hover:text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 class="mt-2 text-lg font-medium text-gray-900">There are no products.</h3>
        <p class="mt-1 text-sm text-gray-500">Start by adding your first product using the form above.</p>
        <div class="mt-6">
          <button @click="resetForm" type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>