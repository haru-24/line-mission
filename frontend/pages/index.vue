<template>
  <div>
    <NewToDo />
    <FinishedToDo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import NewToDo from "../components/toppage/NewToDo.vue";
import FinishedToDo from "../components/toppage/FinishedToDo.vue";

export default defineComponent({
  components: {
    NewToDo,
    FinishedToDo,
  },
});
</script>
