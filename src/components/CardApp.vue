<script>
import { store } from "../assets/data/store";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    title: String,
    original_title: String,
    language: String,
    vote: Number,
  },
  methods: {},
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ original_title }}
      </h6>
      <p class="card-text">LENGUAGE: {{ language }}</p>
      <p class="card-text">VOTE: {{ vote }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: black;
}
</style>
