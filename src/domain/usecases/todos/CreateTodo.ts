import type { Todo } from "@/domain/entities/Todo";
import type { TodoService } from "@/domain/services/TodoService";

export class CreateTodo {

    constructor(private readonly todoService: TodoService) { }

    execute(todo: Todo): Promise<Todo> {
        return this.todoService.createTodo(todo);
    }

}