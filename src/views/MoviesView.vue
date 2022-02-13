<template>
<div class="container" v-if="getMovies">
  <div class="movies-container">
    <MovieComponent v-for="movie in getMovies" :key="movie.id" :requiredProps="movie"/>
  </div>
  <pagination base-route="Films" :current-page="Number($route.query.page)" :total-pages="totalPages"/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MovieComponent from "../components/MovieComponent";
import Pagination from "../components/Pagination";

export default {
  name: "MoviesView",
  components: {Pagination, MovieComponent},
  data(){
    return {
      offset: 0,
    }
  },
  computed: {
    ...mapGetters([
      'getMovies',
      'getTotalMovies',
    ]),
    totalPages(){
      return Math.ceil(this.getTotalMovies / 9);
    }
  },
  methods: {
    ...mapActions(['getMovieList']),

    movieListRequest() {
      this.offset = this.$route.query.page ? (this.$route.query.page - 1) * 9 : 0;
      this.getMovieList({
        offset: this.offset,
        limit: 9,
      })
    },

  },
  watch: {
    $route(){
      this.movieListRequest();
    }
  },
  created() {
    this.movieListRequest()
  }
}
</script>

<style lang="scss" scoped>

.container{
  max-width: 100%;
  background-color: #232323;
}
.movies-container{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
}
</style>