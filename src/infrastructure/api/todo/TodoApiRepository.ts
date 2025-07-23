import type { Todo } from '@/domain/entities/Todo';
import type { TodoRepository } from '@/domain/repositories/TodoRepository';

export class TodoApiRepository implements TodoRepository {

    private readonly baseUrl = 'http://localhost:3000/api/v1/';

    async getTodos(): Promise<Todo[]> {
        return fetch(this.baseUrl).then(res => res.json());
    }

    getTodoById(id: string): Promise<Todo | null> {
        return fetch(`${this.baseUrl}/${id}`)
            .then(res => {
                if (res.status === 404) {
                    return null;
                }
                return res.json();
            });
    }

    async createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json());
    }

    async updateTodo(todo: Todo): Promise<Todo> {
        return fetch(`${this.baseUrl}/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json());
    }

    async deleteTodo(id: string): Promise<void> {
        await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
    }

}
