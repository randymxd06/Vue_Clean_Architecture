import { AxiosClient } from "../api/axios/AxiosClient";
import { TodoRepositoryImpl } from "../repositories/TodoRepositoryImpl";

const httpClient = new AxiosClient();
export const todoRepository = new TodoRepositoryImpl(httpClient);
