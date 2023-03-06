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
          this.searchFlag(store.resultsFilmList);
          this.voteScale(store.resultsFilmList);
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
          this.searchFlag(store.resultsTVShowsList);
          this.voteScale(store.resultsTVShowsList);
        });
    },
    //funzione per cambiare la stringa lenguage in una bandiera
    searchFlag(list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].original_language === "en") {
          list[i].original_language = "https://flagsapi.com/GB/shiny/32.png";
        } else if (list[i].original_language === "ja") {
          list[i].original_language = "https://flagsapi.com/JP/shiny/32.png";
        } else if (list[i].original_language === "ko") {
          list[i].original_language = "https://flagsapi.com/KR/shiny/32.png";
        } else {
          list[i].original_language =
            "https://flagsapi.com/" +
            list[i].original_language.toUpperCase() +
            "/shiny/32.png";
        }
      }
    },

    //funzione per cambiare scala di voto
    voteScale(list) {
      for (let i = 0; i < list.length; i++) {
        list[i].vote_average = parseInt(list[i].vote_average / 2);
      }
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
