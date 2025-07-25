import type { Todo } from "@/domain/entities/Todo";
import type { TodoService } from "@/domain/services/TodoService";

export class GetTodos {

    constructor(private readonly todoService: TodoService) { }

    execute(): Promise<Todo[]> {
        return this.todoService.getTodos();
    }
    
}