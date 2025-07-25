import type { Todo } from "@/domain/entities/Todo";
import type { TodoService } from "@/domain/services/TodoService";

export class DeleteTodo {

    constructor(private readonly todoService: TodoService) { }

    execute(id: string): Promise<Todo> {
        return this.todoService.deleteTodo(id);
    }
    
}