import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class DeleteTodo {

    constructor(private readonly todoRepo: TodoRepository) {}

    execute(id: string): Promise<Todo> {
        return this.todoRepo.deleteTodo(id);
    }

}