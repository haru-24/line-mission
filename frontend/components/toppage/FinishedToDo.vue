<template>
  <div>
    <FinishToDoBtn />
    <div class="text-center mt-10">
      <input type="checkbox" class="inline" />
      <p class="inline">こんにちはサンプル</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import FinishToDoBtn from "./atoms/FinishToDoBtn.vue";
export default defineComponent({
  components: {
    FinishToDoBtn,
  },
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
