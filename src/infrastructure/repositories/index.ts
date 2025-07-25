import { AxiosClient } from "../api/AxiosClient";
import { TodoRepositoryImpl } from "../repositories/TodoRepositoryImpl";

const httpClient = new AxiosClient();

const todoRepository = new TodoRepositoryImpl(httpClient);

export {
  todoRepository
};