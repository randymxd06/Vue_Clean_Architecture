// src/domain/services/TodoService.ts
import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class TodoService {

    constructor(
        private readonly todoRepository: TodoRepository
    ) { }

    async createTodo(todo: Todo): Promise<Todo> {
        if (!todo.title.trim()) throw new Error("The title cannot be empty.");
        const todos = await this.todoRepository.getTodos();
        const isDuplicate = todos.some(t => t.title.toLowerCase() === todo.title.toLowerCase());
        if (isDuplicate) throw new Error("There is already a whole with that title.");
        return this.todoRepository.createTodo(todo);
    }

    async deleteTodo(id: string): Promise<Todo> {
        return this.todoRepository.deleteTodo(id);
    }

    async getTodos(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }

    async getTodoById(id: string): Promise<Todo> {
        return this.todoRepository.getTodoById(id);
    }

    async updateTodo(todo: Todo): Promise<Todo> {
        if (!todo.title.trim()) {
            throw new Error("The title cannot be empty.");
        }
        return this.todoRepository.updateTodo(todo);
    }

}