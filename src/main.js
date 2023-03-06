import { createApp } from "vue";
import App from "./App.vue";

//import bootastrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

//import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
// createApp(App).mount("#app");
