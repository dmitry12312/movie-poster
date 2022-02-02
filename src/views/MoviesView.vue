<template>
<div v-if="getMovies">
  <MovieComponent v-for="movie in getMovies" :key="movie.id" :requiredProps="movie"/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MovieComponent from "../components/MovieComponent";

export default {
  name: "MovieComponent",
  components: {MovieComponent},

  computed: {
    ...mapGetters([
      'getMovies',
    ])
  },
  methods: {
    ...mapActions(['getMovieList'])
  },
  created() {
    this.getMovieList({
      offset: 2,
      limit: 5,
    })
  }
}
</script>

<style scoped>
/*.titles {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  margin: 3%;*/
/*  padding: 5%;*/
/*  list-style-type: none;*/
/*  border: solid rgba(204, 138, 181, 0.85);*/
/*  color: rgba(128, 128, 128, 0.99);*/
/*}*/
/*.movieImg {*/
/*  display: flex;*/
/*  margin: 1%;*/
/*  padding: 15px;*/
/*  width: 80%;*/
/*  height: 80%;*/
/*}*/
</style>