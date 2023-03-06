<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import axios from "axios";
import { store } from "./assets/data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    // funzione che permette la ricerca sia per film che per serie tv
    searchWord(query) {
      store.FilmFound = false;
      store.TVShowsFound = false;
      store.resultsFilmList = [];
      store.resultsTVShowsList = [];
      this.searchForFilms(query);
      this.searchForSeries(query);
      console.log(store.resultsFilmList.length);
      console.log(store.resultsFilmList);

      // todo chiedere perchè la lunghezza dell' array non si aggiorna alla prima richiesta ma solo dopo la prima
    },

    // funzione per cercare film
    searchForFilms(query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b5b3eb1160cf9e1e053108e542484195&query=${query}`
        )
        .then((response) => {
          store.resultsFilmList = response.data.results;
          if (store.resultsFilmList.length > 0) {
            store.FilmFound = true;
          }

          // console.log("risposta chiamata ax");
          // console.log(response);
          // console.log("lista primda del caricamento dei dati");
          // console.log(store.resultsFilmList);
          // console.log("lista dopo caricamento dati");
          // console.log(store.resultsFilmList);
        });
    },

    // funzione per cercare serie tv
    searchForSeries(query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=b5b3eb1160cf9e1e053108e542484195&query=${query}`
        )
        .then((response) => {
          store.resultsTVShowsList = response.data.results;
          if (store.resultsTVShowsList.length > 0) {
            store.TVShowsFound = true;
          }
          // console.log("risposta chiamata ax");
          // console.log(response);
          // console.log("lista primda del caricamento dei dati");
          // console.log(store.resultsFilmList);
          // console.log("lista dopo caricamento dati");
          // console.log(store.resultsFilmList);
        });
    },
  },
  components: { MainApp, HeaderApp },
};
</script>

<template>
  <div>
    <HeaderApp @search-word="searchWord" />
    <MainApp />
  </div>
</template>

<style lang="scss" scoped></style>
