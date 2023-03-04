<script>
import CardApp from "./CardApp.vue";
import { store } from "../assets/data/store";

export default {
  data() {
    return {
      store,
    };
  },
  components: { CardApp },
};
</script>
<template>
  <main class="bg-dark">
    <div class="container">
      <!-- Stampa della lista dei film trovati -->
      <h2
        v-if="store.resultsFilmList.length"
        class="text-center p-3">
        Lista Film
      </h2>
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <CardApp
          v-for="result in store.resultsFilmList"
          :title="result.title"
          :original_title="result.original_title"
          :language="result.original_language"
          :vote="result.vote_average" />
      </div>

      <!-- Stampa della lista delle serie trovate -->
      <h2
        v-show="store.resultsTVShowsList.length"
        class="text-center p-3">
        Lista Serie TV
      </h2>

      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <CardApp
          v-for="result in store.resultsTVShowsList"
          :title="result.title"
          :original_title="result.original_title"
          :lenguage="result.original_lenguage"
          :vote="result.vote_average" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  color: white;
}
</style>
