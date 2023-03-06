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
        v-if="store.FilmFound"
        class="text-center p-3">
        Lista Film
      </h2>
      <div class="row justify-content-center">
        <CardApp
          v-for="result in store.resultsFilmList"
          :image="result.poster_path"
          :title="result.title"
          :original_title="result.original_title"
          :language="result.original_language"
          :vote="result.vote_average" />
      </div>

      <!-- Stampa della lista delle serie trovate -->
      <h2
        v-if="store.TVShowsFound"
        class="text-center p-3">
        Lista Serie TV
      </h2>

      <div class="row">
        <CardApp
          v-for="result in store.resultsTVShowsList"
          :image="result.backdrop_path"
          :title="result.name"
          :original_title="result.original_name"
          :language="result.original_language"
          :vote="result.vote_average" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 80vh;
  color: white;
}
.row {
  row-gap: 15px;
}
</style>
