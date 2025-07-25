import { AxiosClient } from "../api/AxiosClient";
import { TodoRepositoryImpl } from "../repositories/TodoRepositoryImpl";

/**==============
 * HTTP CLIENT
=================*/
const httpClient = new AxiosClient();

/**=================================
 * IMPLEMENTATION OF REPOSITORIES
====================================*/
const todoRepository = new TodoRepositoryImpl(httpClient);

/**=================================================
 * EXPORTING REPOSITORIES FOR USE IN PINIA STORES
====================================================*/
export {
  todoRepository
};