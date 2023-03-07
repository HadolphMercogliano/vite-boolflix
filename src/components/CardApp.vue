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
    overview: String,
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
        <div class="d-flex flex-column justify-content-center">
          <h4 class="card-title">{{ title }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ original_title }}
          </h6>
          <div class="d-flex align-items-center">
            <span class="card-text pe-2">LENGUAGE: </span>
            <img
              :src="language"
              alt="unknown" />
          </div>
          <div class="d-flex">
            <span class="card-text pe-1">VOTE:</span>
            <span
              class="vote"
              v-for="vote in vote">
              <font-awesome-icon icon="fa-solid fa-star" />
            </span>
          </div>
          <div>
            <span>{{ overview }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  color: black;
  border: black;
  &:hover .card-body {
    display: block;
  }
  img {
    border-radius: var(--bs-card-border-radius);
  }
  .card-body {
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    color: white;
    background-color: rgba(31, 31, 31, 0.877);
    border-radius: var(--bs-card-border-radius);
    overflow-y: auto;
  }
}
.card-img {
  img {
    width: 100%;
  }
}
.vote {
  color: rgb(255, 183, 0);
}
</style>
