<template>
  <div>
    <FinishToDoBtn />
    <div v-if="!todo_datas"></div>

    <div v-else>
      <div
        v-for="(todoData, index) in todo_datas"
        :key="index"
        class="text-center mt-10"
      >
        <div v-if="todoData.finished === true">
          <input
            type="checkbox"
            class="inline"
            @change="$emit('pushCheckBox', todoData)"
            v-model="todoData.finished"
          />
          <nuxt-Link
            tag="a"
            :to="{ path: `/detail?id=${todoData.id}` }"
            class="inline"
          >
            {{ todoData.title }}
          </nuxt-Link>
          <button @click="$emit('pushDeleteBtn', todoData.id)">削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Todos } from "../../types/types";
import FinishToDoBtn from "./atoms/FinishToDoBtn.vue";

export default defineComponent({
  props: {
    todo_datas: {
      type: Array as PropType<Todos[]>,
      default: () => {},
    },
  },
  components: {
    FinishToDoBtn,
  },
  setup() {},
});
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mt-10 {
  margin-top: 10px;
}
.inline {
  display: inline;
}
</style>
