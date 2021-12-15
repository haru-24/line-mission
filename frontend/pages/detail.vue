<template>
  <div>
    <Detail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Detail from "../components/detail/Detail.vue";
export default defineComponent({
  components: {
    Detail,
  },
});
</script>
