<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useProductStore } from "../stores/productStore";
import { Product } from "@/domain/entities/Product";

const productStore = useProductStore();
const isEditing = ref(false);
const currentProductId = ref<string | null>(null);

onMounted(() => {
  productStore.loadProducts();
});

const handleSubmit = () => {
  if (isEditing.value && currentProductId.value) {
    const product = {
      ...productStore.newProduct,
      id: currentProductId.value,
    };
    productStore.updateProductItem(product);
  } else {
    productStore.addProduct();
  }
  resetForm();
};

const editProduct = (product: Product) => {
  isEditing.value = true;
  currentProductId.value = product.id;
  productStore.newProduct = {
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
  };
};

const resetForm = () => {
  isEditing.value = false;
  currentProductId.value = null;
  productStore.resetNewProduct();
};
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10 p-4">
    <h1 class="text-2xl font-bold mb-6">🛍️ Gestión de Productos</h1>

    <form @submit.prevent="handleSubmit" class="mb-8 p-4 border rounded-lg">
      <h2 class="text-xl font-semibold mb-4">
        {{ isEditing ? 'Editar Producto' : 'Agregar Nuevo Producto' }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="name" class="block mb-2">Nombre</label>
          <input name="name" v-model="productStore.newProduct.name" class="w-full p-2 border rounded" required />
        </div>
        
        <div>
          <label for="price" class="block mb-2">Precio</label>
          <input name="price" v-model.number="productStore.newProduct.price" type="number" min="0" step="0.01" class="w-full p-2 border rounded" required />
        </div>
        
        <div>
          <label for="stock" class="block mb-2">Stock</label>
          <input name="stock" v-model.number="productStore.newProduct.stock" type="number" min="0" class="w-full p-2 border rounded" required />
        </div>
        
        <div>
          <label for="category" class="block mb-2">Categoría</label>
          <input name="category" v-model="productStore.newProduct.category" class="w-full p-2 border rounded" required />
        </div>
      </div>
      
      <div class="mb-4">
        <label for="description" class="block mb-2">Descripción</label>
        <textarea name="description" v-model="productStore.newProduct.description" class="w-full p-2 border rounded" rows="3"></textarea>
      </div>
      
      <div class="flex gap-2">
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {{ isEditing ? 'Actualizar' : 'Agregar' }}
        </button>
        <button v-if="isEditing" @click="resetForm" type="button" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Cancelar
        </button>
      </div>
    </form>

    <div v-if="productStore.loading" class="text-center py-4">
      Cargando productos...
    </div>
    
    <div v-else-if="productStore.error" class="text-red-500 py-4">
      Error: {{ productStore.error }}
    </div>
    
    <div v-else>
      <div class="overflow-x-auto">
        <table class="min-w-full border">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-3 text-left">Nombre</th>
              <th class="p-3 text-left">Precio</th>
              <th class="p-3 text-left">Stock</th>
              <th class="p-3 text-left">Categoría</th>
              <th class="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productStore.products" :key="product.id" class="border-t">
              <td class="p-3">{{ product.name }}</td>
              <td class="p-3">${{ product.price?.toFixed(2) ?? '0.00' }}</td>
              <td class="p-3">{{ product.stock }}</td>
              <td class="p-3">{{ product.category }}</td>
              <td class="p-3 flex gap-2">
                <button @click="editProduct(product)" class="text-blue-500 hover:text-blue-700">
                  ✏️
                </button>
                <button @click="productStore.deleteProduct(product.id)" class="text-red-500 hover:text-red-700">
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p v-if="!productStore.products.length" class="text-gray-500 py-4">
        No hay productos registrados.
      </p>
    </div>
  </div>
</template>