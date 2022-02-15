<template>
  <div class="header-container">
    <div class="search-input">
        <input type="text" v-model="search" @change="setQuery" placeholder="Enter title name">
        <button v-if="search" type="reset" @click="clearQuery">Clear</button>
    </div>
    <div class="search-by-button">
        <p> SEARCH BY </p>
        <button type="submit" @click="searchByTitle">Title</button>
        <button type="submit" @click="searchByGenre">Genre</button>
    zzzzzzzz  {{ searchBy }}
    </div>
  </div>
<div class="container" v-if="getMovies">
  <div class="movies-container">
    <MovieComponent v-for="movie in getMovies" :key="movie.id" :requiredProps="movie"/>
  </div>
  <pagination v-if="totalPages > 1" base-route="Films" :current-page="Number($route.query.page)" :total-pages="totalPages"/>
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
      search: '',
      searchBy: 'title',
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
        search: this.search,
        searchBy: this.searchBy,
        offset: this.offset,
        limit: 9,
      })
    },
    setQuery(){
      if(this.search){
        let query = {
          search: this.search,
          searchBy: this.searchBy,
        }
        this.$router.push({name:'Films', query: query})
      } else {
        this.$router.push({name:'Films'})
      }
      this.movieListRequest()
    },
    clearQuery(){
      this.search = '';
      this.setQuery();
    },
    searchByTitle(){
      this.$emit(this.searchBy = 'title')
    },
    searchByGenre(){
      this.$emit(this.searchBy = 'genres')
    }
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
input {
  display: inline-flex;
  justify-content: center;
  width: 500px;
  height: 25px;
  margin: 0 auto;
  padding: 5px;
  border: none;
  background-color: rgba(35, 35, 35, 0.8);
  color: #ffffff;
}
.header-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/backgroundFilms.jpeg);
  width: 100%;
  height: 390px;
  color: #ffffff;
}
button{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(204, 138, 181, 0.85);
  margin-left: 5px;
  width: 80px;
  color: #ffffff;
  border-radius: 4px;
  height: 40px;
}
.search-by-button{
  display: inline-flex;
  align-items: center;
}

</style>
