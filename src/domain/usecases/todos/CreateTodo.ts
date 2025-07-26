import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class CreateTodo {

    constructor(private readonly todoRepository: TodoRepository) { }

    execute(todo: Omit<Todo, 'id'>): Promise<Todo> {
        return this.todoRepository.createTodo(todo);
    }

}