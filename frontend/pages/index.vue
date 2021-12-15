<template>
  <div>
    <NewToDo :todo_datas="todos" @pushCheckBox="finishedTodo" />
    <FinishedToDo
      :todo_datas="todos"
      @pushCheckBox="finishedTodo"
      @pushDeleteBtn="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import NewToDo from "../components/toppage/NewToDo.vue";
import FinishedToDo from "../components/toppage/FinishedToDo.vue";
import { getAllTodos } from "../api/get";
import { Todos } from "../types/types";
import { putChangeIsFinished } from "../api/put";
import { deleteTodos } from "../api/delete";

export default defineComponent({
  components: {
    NewToDo,
    FinishedToDo,
  },

  setup() {
    const todos = ref<Todos[]>();

    getAllTodos().then((result) => {
      todos.value = result;
    });

    //チェックボックスにチェックするとfinishedに行く
    const finishedTodo = (todoData: Todos) => {
      if (todoData.finished) {
        putChangeIsFinished(true, todoData.id);
      } else if (!todoData.finished) {
        putChangeIsFinished(false, todoData.id);
      }
      console.log(todos.value);
    };

    // todoの削除
    const deleteTodo = (id: number) => {
      deleteTodos(id).then(() => {
        const deletedTodos = todos.value.filter((todo) => todo.id !== id);
        todos.value = deletedTodos;
      });
    };
    return {
      todos,
      finishedTodo,
      deleteTodo,
    };
  },
});
</script>
