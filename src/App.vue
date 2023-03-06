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
          for (let i = 0; i < store.resultsFilmList.length; i++) {
            store.resultsFilmList[i].original_language = this.searchFlag(
              store.resultsFilmList[i].original_language
            );
          }
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
          for (let i = 0; i < store.resultsTVShowsList.length; i++) {
            store.resultsTVShowsList[i].original_language = this.searchFlag(
              store.resultsTVShowsList[i].original_language
            );
          }
        });
    },
    //funzione per cambiare la stringa lenguage in una bandiera
    searchFlag(lenguage) {
      if (lenguage === "en") return "https://flagsapi.com/GB/shiny/32.png";
      if (lenguage === "ja") return "https://flagsapi.com/JP/shiny/32.png";
      if (lenguage === "ko") return "https://flagsapi.com/KR/shiny/32.png";
      return "https://flagsapi.com/" + lenguage.toUpperCase() + "/shiny/32.png";
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
