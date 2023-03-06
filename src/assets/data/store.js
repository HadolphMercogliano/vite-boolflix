import { reactive } from "vue";
export const store = reactive({
  resultsFilmList: [],
  resultsTVShowsList: [],
  TVShowsFound: false,
  FilmFound: false,
  //path base per le immagini
  ImgPath: "https://image.tmdb.org/t/p/w342/",
});
