import axios from "axios";

export const deleteTodos = async (userID: number) => {
  try {
    await axios.delete("http://localhost:8000/todos/", {
      data: {
        id: userID,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
