<script>
import CardApp from "./CardApp.vue";
import { store } from "../assets/data/store";

export default {
  data() {
    return {
      store, //store va nei data solo quando dobbiamo usarlo nel template
    };
  },
  components: { CardApp },
};
</script>
<template>
  <main class="bg-dark pb-4">
    <div class="container">
      <!-- Stampa della lista dei film trovati -->
      <h1
        v-if="store.FilmFound"
        class="text-center p-3">
        Lista Film
      </h1>
      <div class="row justify-content-center">
        <CardApp
          v-for="result in store.resultsFilmList"
          :image="result.poster_path"
          :title="result.title"
          :original_title="result.original_title"
          :language="result.original_language"
          :vote="result.vote_average"
          :overview="result.overview" />
      </div>

      <!-- Stampa della lista delle serie trovate -->
      <h1
        v-if="store.TVShowsFound"
        class="text-center p-3">
        Lista Serie TV
      </h1>

      <div class="row">
        <CardApp
          v-for="result in store.resultsTVShowsList"
          :image="result.poster_path"
          :title="result.name"
          :original_title="result.original_name"
          :language="result.original_language"
          :vote="result.vote_average"
          :overview="result.overview" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 90px);
  color: white;
}
.row {
  row-gap: 15px;
}
</style>
