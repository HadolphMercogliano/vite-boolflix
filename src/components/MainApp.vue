<script>
import CardApp from "./CardApp.vue";
import { store } from "../assets/data/store";

export default {
  data() {
    return {
      store,
      message: "ciao main",
    };
  },
  components: { CardApp },
};
</script>
<template>
  <main class="bg-dark">
    <div class="container">
      <div class="row row-cols-3">
        <CardApp />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  color: white;
}
</style>
