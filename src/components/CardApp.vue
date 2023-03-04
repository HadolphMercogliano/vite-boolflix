<script>
import { store } from "../assets/data/store";
export default {
  data() {
    return {
      store,
      message: "ciao CardApp",
    };
  },
  methods: {},
};
</script>
<template>
  <div
    v-for="result in store.resultsList"
    class="card">
    <div class="card-body">
      <h5 class="card-title">{{ result.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ result.original_title }}</h6>
      <p class="card-text">LENGUAGE: {{ result.original_language }}</p>
      <p class="card-text">VOTE: {{ result.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: black;
}
</style>
