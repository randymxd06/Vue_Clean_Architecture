import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class CreateTodo {

    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    execute(todo: Todo): Promise<Todo> {
        return this.todoRepo.createTodo(todo);
    }

}