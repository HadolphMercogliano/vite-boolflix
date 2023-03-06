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
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ original_title }}
        </h6>
        <div class="d-flex align-items-center">
          <span class="card-text pe-2">LENGUAGE: </span>
          <img
            :src="language"
            alt="unknown" />
          <!-- {{ language }} -->
        </div>
        <div class="d-flex">
          <p class="card-text pe-1">VOTE:</p>
          <span v-for="vote in vote">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: black;
  border: black;
  img {
    border-top-right-radius: var(--bs-card-border-radius);
    border-top-left-radius: var(--bs-card-border-radius);
  }
}
.card-img {
  img {
    width: 100%;
  }
}
</style>
