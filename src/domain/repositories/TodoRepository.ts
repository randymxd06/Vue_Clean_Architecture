import type { Todo } from "../entities/Todo";

export interface TodoRepository {
	getTodos(): Promise<any[]>;
	getTodoById(id: any): Promise<Todo>;
	createTodo(todo: Omit<number, "id">): Promise<number>;
	updateTodo(todo: Todo): Promise<Todo>;
	deleteTodo(id: string): Promise<Todo>;
}
