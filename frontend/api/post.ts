import axios from "axios";
import { Todos } from "../types/types";

export const postTodo = async (todos: Todos) => {
  try {
    await axios.post("http://localhost:8000/todos/", {
      userId: todos.userId,
      title: todos.title,
      description: todos.description,
      finished: false,
    });
  } catch (err) {
    console.log(err);
  }
};
