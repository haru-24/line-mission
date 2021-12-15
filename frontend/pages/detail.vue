<template>
  <div>
    <!-- 新規入力 -->
    <div v-if="!$route.query.id">
      <div class="boder-1s text-center w-full title-conteiner">
        ToDoTitle<input
          class="inline content-center"
          v-model="todoValue.title"
        />
        <BackBtn />
      </div>

      <div class="boder-1s w-full">
        <div class="descripion-conteiner">
          <div>
            <p>Description:</p>
            <textarea
              id=""
              cols="30"
              rows="10"
              v-model="todoValue.description"
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <SaveBtn @clickSaveBtn="postTodoData" />
      </div>
    </div>

    <!-- 変更時 -->
    <div v-if="$route.query.id">
      <div class="boder-1s text-center w-full title-conteiner">
        <p class="inline content-center">ToDoTitle</p>
        <BackBtn />
      </div>

      <div class="boder-1s w-full">
        <div class="descripion-conteiner">
          <div>
            <p>Description:</p>
            <textarea id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div>
        <SaveBtn />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import SaveBtn from "../components/detail/atoms/SaveBtn.vue";
import BackBtn from "../components/detail/atoms/BackBtn.vue";
import { postTodo } from "../api/post";
import { Todos } from "../types/types";
export default defineComponent({
  components: {
    SaveBtn,
    BackBtn,
  },
  setup(_props, context) {
    const todoValue = reactive({
      title: "",
      userId: 1,
      description: "",
    }) as Todos;

    const postTodoData = () => {
      postTodo(todoValue);
      context.root.$router.push("/");
    };

    return {
      todoValue,
      postTodoData,
    };
  },
});
</script>

<style scoped>
.inline {
  display: inline;
}

.title-conteiner {
  padding-top: 7px;
  padding-bottom: 7px;
}
.boder-1s {
  border: 1px solid;
}
.text-center {
  text-align: center;
}

.-mt-20 {
  margin-top: -20px;
}
.inline {
  display: inline;
}
.w-full {
  width: 100%;
}
.descripion-conteiner {
  display: block;
  margin: auto;
  display: flex;
  justify-content: center;
}
textarea {
  margin-bottom: 20px;
  margin-top: -20px;
  width: 300px;
  height: 150px;
  resize: none;
}

.content-center {
  margin-left: 25px;
}
</style>
