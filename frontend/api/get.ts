import axios from "axios";
import { Todos } from "../types/types";

export const getAllTodos = async () => {
  try {
    const result = await axios.get("http://localhost:8000/todos/");
    if (result) {
      return result.data as Todos[];
    }
  } catch (err) {
    console.log(err);
  }
};
