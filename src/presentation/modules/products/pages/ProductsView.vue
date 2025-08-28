<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Product } from "@/domain/entities/Product"
import { useProductStore } from "../stores/productStore"
import { useThemeStore } from "@/presentation/stores/themeStore"
import Button from "@/presentation/components/atoms/Button.vue"
import Icon from "@/presentation/components/atoms/Icon.vue"

const productStore = useProductStore()
const themeStore = useThemeStore()
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

  <main>

    <!--=========
        HEADER
    =============-->
    <header class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-bold text-text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Product Management
        </h1>
      </div>
      <p class="text-text-secondary mt-1">Manage product inventory</p>
    </header>

    <!--================
        IMPROVED FORM
    ====================-->
    <form @submit.prevent="handleSubmit" class="mb-10 p-6 rounded-xl border border-border shadow-inner bg-card">

      <section class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-text-primary">
          {{ isEditing ? '✏️ Edit Product' : '➕ Add New Product' }}
        </h2>
        <span class="px-3 py-1 text-xs font-medium rounded-full"
          :class="isEditing ? 'bg-yellow-100 text-yellow-800' : 'bg-primary-100 text-primary-800'">
          {{ isEditing ? 'Edit Mode' : 'Creation Mode' }}
        </span>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        <article class="space-y-2">
          <label for="name" class="block text-sm font-medium text-text-primary">Product Name</label>
          <input name="name" v-model="productStore.newProduct.name"
            class="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-text-primary placeholder:text-surface-400 bg-surface-50"
            placeholder="Eg: HP EliteBook laptop" required />
        </article>

        <article class="space-y-2">
          <label for="price" class="block text-sm font-medium text-text-primary">Price (USD)</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted">$</span>
            <input name="price" v-model.number="productStore.newProduct.price" type="number" min="0" step="0.01"
              class="w-full pl-8 pr-4 py-2.5 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-text-primary placeholder:text-surface-400 bg-surface-50"
              placeholder="0.00" required />
          </div>
        </article>

        <article class="space-y-2">
          <label for="stock" class="block text-sm font-medium text-text-primary">Stock Available</label>
          <input name="stock" v-model.number="productStore.newProduct.stock" type="number" min="0"
            class="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-text-primary placeholder:text-surface-400 bg-surface-50"
            placeholder="Quantity in stock" required />
        </article>

        <article class="space-y-2">
          <label for="category" class="block text-sm font-medium text-text-primary">Category</label>
          <input name="category" v-model="productStore.newProduct.category"
            class="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-text-primary placeholder:text-surface-400 bg-surface-50"
            placeholder="E.g.: Electronics" required />
        </article>

      </section>

      <section class="mb-6 space-y-2">
        <label for="description" class="block text-sm font-medium text-text-primary">Description</label>
        <textarea name="description" v-model="productStore.newProduct.description"
          class="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-text-primary placeholder:text-surface-400 bg-surface-50"
          rows="3" placeholder="Detailed product description..."></textarea>
      </section>

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
      <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 rounded-lg">
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        Loading products...
      </div>
    </section>

    <section v-else-if="productStore.error" class="p-4 mb-6 bg-red-50 border-l-4 border-red-500 rounded">
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
    </section>

    <section v-else>
      <div v-if="productStore.products.length > 0" class="overflow-hidden rounded-xl border border-border shadow-sm">
        <table class="min-w-full divide-y divide-border">
          <thead class="bg-surface-100">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Product</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Price</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Stock</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Category</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">
                Actions</th>
            </tr>
          </thead>
          <tbody class="bg-card divide-y divide-border">
            <tr v-for="product in productStore.products" :key="product.id" class="hover:bg-surface-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-text-primary">{{ product.name }}</div>
                    <div class="text-sm text-text-secondary line-clamp-1">{{ product.description || 'No description' }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                ${{ (product.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ product.stock }} units
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {{ product.category || '-' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button @click="editProduct(product)" variant="ghost" size="sm" class="p-2 text-primary-600 hover:text-primary-900 hover:bg-primary-50">
                  <Icon name="edit" size="sm" />
                </Button>
                <Button @click="productStore.deleteProduct(product.id)" variant="ghost" size="sm" class="p-2 text-red-600 hover:text-red-900 hover:bg-red-50">
                  <Icon name="trash-2" size="sm" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="text-center py-12 bg-surface-50 rounded-xl border-2 border-dashed border-border">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-text-muted" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 class="mt-2 text-lg font-medium text-text-primary">There are no products.</h3>
        <p class="mt-1 text-sm text-text-secondary">Start by adding your first product using the form above.</p>
        <div class="mt-6">
          <button @click="resetForm" type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Product
          </button>
        </div>
      </div>
    </section>

  </main>

</template>