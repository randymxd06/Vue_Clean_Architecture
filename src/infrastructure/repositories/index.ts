import { CreateTodo } from "@/domain/usecases/todos/CreateTodo";
import { AxiosClient } from "../api/AxiosClient";
import { TodoRepositoryImpl } from "../repositories/TodoRepositoryImpl";
import { DeleteTodo } from "@/domain/usecases/todos/DeleteTodo";
import { GetTodos } from "@/domain/usecases/todos/GetTodos";

const httpClient = new AxiosClient();

const todoRepository = new TodoRepositoryImpl(httpClient);

export const todoUseCases = {
  getTodos: new GetTodos(todoRepository),
  createTodo: new CreateTodo(todoRepository),
  deleteTodo: new DeleteTodo(todoRepository),
};