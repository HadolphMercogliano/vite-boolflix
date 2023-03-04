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
    searchWord(query) {
      // console.log(query);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b5b3eb1160cf9e1e053108e542484195&query=${query}`
        )
        .then((response) => {
          store.resultsFilmList = response.data.results;

          // console.log("risposta chiamata ax");
          // console.log(response);
          // console.log("lista primda del caricamento dei dati");
          // console.log(store.resultsList);
          // console.log("lista dopo caricamento dati");
          // console.log(store.resultsList);
        });
    },
    searchForFilms() {},
    searchForSeries() {},
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
