import { defineStore } from 'pinia';
import { ref } from 'vue';

/**=================================================
 * IMPORT THE REQUIRED USE CASES AND REPOSITORIES
====================================================*/
import { GetTodos } from '@/domain/usecases/todos/getTodos';
import { CreateTodo } from '@/domain/usecases/todos/createTodo';
import { DeleteTodo } from '@/domain/usecases/todos/deleteTodo';
import { FetchHttpClient } from '@/infrastructure/http/FetchHttpClient';
import { TodoApiRepository } from '@/infrastructure/api/todo/TodoApiRepository';
import type { Todo } from '@/domain/entities/Todo';

/**============================================================================================
 * TodoApiRepository is the repository that interacts with the API.
 * FetchHttpClient is the HTTP client used to make requests.
 * GetTodos, CreateTodo, and DeleteTodo are use cases that encapsulate the business logic.
 * This store will manage the state of todos, including loading, adding, and deleting todos.
===============================================================================================*/
const todoRepo = new TodoApiRepository(new FetchHttpClient());

export const useTodoStore = defineStore('todo', () => {

    const todos = ref<Todo[]>([]);
    const newTitle = ref('');
    const loading = ref(false);
    const error = ref<string | null>(null);

    const getTodosUseCase = new GetTodos(todoRepo);
    const createTodoUseCase = new CreateTodo(todoRepo);
    const deleteTodoUseCase = new DeleteTodo(todoRepo);

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
