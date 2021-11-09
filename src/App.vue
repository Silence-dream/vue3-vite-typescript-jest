<template>
  <div>
    <h1 class="div">Vue app</h1>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
    <Greeting></Greeting>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Greeting from "@/components/Greeting.vue";
export default defineComponent({
  name: "App",
  components: {
    Greeting,
  },
  setup() {
    let count = ref(0);
    function increment() {
      count.value++;
    }
    return {
      count,
      increment,
    };
  },
});
</script>

<style lang="scss">
.div {
  color: $color;
}
</style>