<script>
export default {
  data() {
    return {
      searchquery: "ritorno al futuro",
    };
  },

  emits: ["search-word"],
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex justify-content-betweeen">
      <a
        class="navbar-brand a"
        href="#">
        <img
          class="logo"
          src="../assets/img/Netflix-black.png"
          alt="" />
      </a>
      <div>
        <form
          @submit.prevent="$emit('search-word', searchquery)"
          class="d-flex"
          role="search">
          <input
            v-model="searchquery"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search" />
          <!-- @click="" -->
          <button
            class="btn btn-danger"
            type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: black;
  .container-fluid {
    flex-wrap: nowrap;
  }
}
.logo {
  width: 80%;
  img {
    width: 100%;
  }
}
// .a {
//   flex-direction: row;
//   justify-content: center;
//   display: flex;
// }
</style>
