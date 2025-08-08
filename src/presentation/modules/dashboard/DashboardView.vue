<script setup lang="ts">
import { ref } from 'vue';

const contentItems = ref([
    { id: 1, title: 'Elemento de contenido 1', description: 'Esta es una descripción del elemento de contenido que demuestra el scroll del layout.' },
    { id: 2, title: 'Elemento de contenido 2', description: 'Esta es una descripción del elemento de contenido que demuestra el scroll del layout.' },
    { id: 3, title: 'Elemento de contenido 3', description: 'Esta es una descripción del elemento de contenido que demuestra el scroll del layout.' },
    { id: 4, title: 'Elemento de contenido 4', description: 'Esta es una descripción del elemento de contenido que demuestra el scroll del layout.' },
    { id: 5, title: 'Elemento de contenido 5', description: 'Esta es una descripción del elemento de contenido que demuestra el scroll del layout.' },
])
</script>

<template>
    <div class="px-4 py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-500">Total de Proyectos</p>
                    <i class="fas fa-folder text-gray-400"></i>
                </div>
                <div class="mt-2 text-2xl font-bold text-gray-900">
                    24
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-500">Mensajes Nuevos</p>
                    <i class="fas fa-comments text-gray-400"></i>
                </div>
                <div class="mt-2 text-2xl font-bold text-gray-900">
                    12
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-500">Tareas Completadas</p>
                    <i class="fas fa-tasks text-gray-400"></i>
                </div>
                <div class="mt-2 text-2xl font-bold text-gray-900">
                    89%
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <h2 class="text-lg font-semibold text-gray-900">Bienvenido de vuelta, Sofia</h2>
            <p class="mt-1 text-sm text-gray-500">Aquí tienes un resumen de tu actividad reciente.</p>
        </div>

        <div class="space-y-4">
            <div v-for="item in contentItems" :key="item.id"
                class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex items-center justify-between">
                <div>
                    <h3 class="text-base font-semibold text-gray-900">{{ item.title }}</h3>
                    <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                </div>
                <button
                    class="ml-4 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-150">
                    Ver más
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>