import type { Todo } from '../entities/Todo';

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  getTodoById(id: string): Promise<Todo>;
  createTodo(todo: Omit<Todo, 'id'>): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo>;
  deleteTodo(id: string): Promise<Todo>;
}