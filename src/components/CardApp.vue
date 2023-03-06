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
    image: String,
  },
  methods: {},
};
</script>
<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card h-100">
      <div class="card-img">
        <img
          :src="store.ImgPath + image"
          alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ original_title }}
        </h6>
        <p class="card-text">LENGUAGE: {{ language }}</p>
        <img
          :src="language"
          alt="" />
        <p class="card-text">VOTE: {{ vote }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: black;
}
.card-img {
  img {
    max-width: 100%;
  }
}
</style>
