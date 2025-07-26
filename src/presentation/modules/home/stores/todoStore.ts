import { defineStore } from 'pinia';
import { ref } from 'vue';

/**=================================================
 * IMPORT THE REQUIRED USE CASES AND REPOSITORIES
====================================================*/
import { todoUseCases } from '@/infrastructure/repositories';
import type { Todo } from '@/domain/entities/Todo';

/**==========================================
 * EXTRACT THE USE CASES FOR EASIER ACCESS
=============================================*/
const { getTodos, createTodo, deleteTodo: removeTodo } = todoUseCases;

/**==================
 * USE TODOS STORE
=====================*/
export const useTodoStore = defineStore('todo', () => {

    const todos = ref<Todo[]>([]);
    const newTitle = ref('');
    const loading = ref(false);
    const error = ref<string | null>(null);

    /**======================
     * LOAD TODOS FUNCTION
    =========================*/
    const loadTodos = async () => {
        loading.value = true;
        try {
            todos.value = await getTodos.execute();
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.error('Error cargando todos:', e.message);
                error.value = e.message;
            } else {
                console.error('Error inesperado:', e);
                error.value = 'Error inesperado';
            }
        } finally {
            loading.value = false;
        }
    };

    /**=====================
     * ADD TO DO FUNCTION
     * @returns 
    ========================*/
    const addTodo = async () => {
        if (!newTitle.value.trim()) return;
        const todo = await createTodo.execute({
            title: newTitle.value,
            completed: false,
        } as Todo);
        todos.value.push(todo);
        newTitle.value = '';
    };

    /**========================
     * DELETE TO DO FUNCTION
     * @param {string} id 
    ===========================*/
    const deleteTodo = async (id: string) => {
        await removeTodo.execute(id);
        todos.value = todos.value.filter(t => t.id !== id);
    };

    return {
        todos,
        newTitle,
        loading,
        error,
        loadTodos,
        addTodo,
        deleteTodo,
    };
    
});
