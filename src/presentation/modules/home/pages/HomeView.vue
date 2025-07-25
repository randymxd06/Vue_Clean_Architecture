<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.loadTodos();
});
</script>

<template>
  <div class="max-w-xl mx-auto mt-10 p-4">
    <h1 class="text-2xl font-bold mb-4">📝 Mi Todo List</h1>

    <form @submit.prevent="todoStore.addTodo" class="flex gap-2 mb-4">
      <input v-model="todoStore.newTitle" class="flex-1 p-2 border rounded" placeholder="Nuevo todo" />
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">
        Añadir
      </button>
    </form>

    <ul v-if="todoStore.todos.length" class="space-y-2">
      <li v-for="todo in todoStore.todos" :key="todo.id" class="flex justify-between items-center p-2 border rounded">
        <span :class="{ 'line-through text-gray-400': todo.completed }">
          {{ todo.title }}
        </span>
        <button @click="todoStore.deleteTodo(todo.id)" class="text-red-500 hover:text-red-700">
          🗑️
        </button>
      </li>
    </ul>

    <p v-else class="text-gray-500">No hay tareas aún.</p>
  </div>
</template>
