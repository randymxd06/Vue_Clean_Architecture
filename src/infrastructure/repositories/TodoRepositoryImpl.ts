import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";
import type { HttpClient } from "../api/HttpClient";

export class TodoRepositoryImpl implements TodoRepository {
	private readonly baseUrl = "todos";

	constructor(private readonly http: HttpClient) {}

	getTodos(): Promise<Todo[]> {
		return this.http.get<Todo[]>(this.baseUrl);
	}

	getTodoById(id: string): Promise<Todo> {
		return this.http.get<Todo>(`${this.baseUrl}/${id}`);
	}

	createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
		return this.http.post<Todo>(this.baseUrl, todo);
	}

	updateTodo(todo: Todo): Promise<Todo> {
		return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
	}

	deleteTodo(id: string): Promise<Todo> {
		return this.http.delete<Todo>(`${this.baseUrl}/${id}`);
	}
}
