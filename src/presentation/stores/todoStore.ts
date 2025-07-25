import { defineStore } from 'pinia';
import { ref } from 'vue';

/**=================================================
 * IMPORT THE REQUIRED USE CASES AND REPOSITORIES
====================================================*/
import { CreateTodo } from '@/domain/usecases/todos/CreateTodo';
import { DeleteTodo } from '@/domain/usecases/todos/DeleteTodo';
import { GetTodos } from '@/domain/usecases/todos/GetTodos';
import type { Todo } from '@/domain/entities/Todo';
import { todoRepository } from '@/infrastructure/dependency-injection/Di';

export const useTodoStore = defineStore('todo', () => {

    const todos = ref<Todo[]>([]);
    const newTitle = ref('');
    const loading = ref(false);
    const error = ref<string | null>(null);

    const getTodosUseCase = new GetTodos(todoRepository);
    const createTodoUseCase = new CreateTodo(todoRepository);
    const deleteTodoUseCase = new DeleteTodo(todoRepository);

    const loadTodos = async () => {
        loading.value = true;
        try {
            todos.value = await getTodosUseCase.execute();
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

    const addTodo = async () => {
        if (!newTitle.value.trim()) return;
        const todo = await createTodoUseCase.execute({
            title: newTitle.value,
            completed: false,
        } as Todo); // omitir id
        todos.value.push(todo);
        newTitle.value = '';
    };

    const deleteTodo = async (id: string) => {
        await deleteTodoUseCase.execute(id);
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
