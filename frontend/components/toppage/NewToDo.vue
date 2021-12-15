<template>
  <div>
    <NewTodoBtn />
    <div class="text-center mt-10">
      <input type="checkbox" class="inline" />
      <nuxt-Link tag="a" to="detail" class="inline">
        こんにちはサンプル
      </nuxt-Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import NewTodoBtn from "./atoms/NewTodoBtn.vue";
export default defineComponent({
  components: {
    NewTodoBtn,
  },
});
</script>

<style scoped>
.boder-1s {
  border: 1px solid;
}
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
