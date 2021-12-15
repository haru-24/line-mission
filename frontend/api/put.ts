import axios from "axios";

export const putChangeIsFinished = async (
  isFinished: boolean,
  todoID: number
) => {
  try {
    await axios.put("http://localhost:8000/todos/finished", {
      id: todoID,
      finished: isFinished,
    });
  } catch (err) {
    console.log(err);
  }
};
