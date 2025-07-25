import type { Todo } from "@/domain/entities/Todo";
import type { TodoRepository } from "@/domain/repositories/TodoRepository";

export class DeleteTodo {

    constructor(private readonly todoRepository: TodoRepository) { }

    execute(id: string): Promise<Todo> {
        return this.todoRepository.deleteTodo(id);
    }
    
}