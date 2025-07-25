import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class GetTodos {

    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    execute(): Promise<Todo[]> {
        return this.todoRepo.getTodos();
    }

}