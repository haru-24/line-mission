<template>
  <div>
    <NewToDo />
    <FinishedToDo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewToDo from "../components/toppage/NewToDo.vue";
import FinishedToDo from "../components/toppage/FinishedToDo.vue";

export default Vue.extend({
  components: {
    NewToDo,
    FinishedToDo,
  },
});
</script>
