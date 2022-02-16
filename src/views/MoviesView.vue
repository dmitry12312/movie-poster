<template>
  <div class="header-container">
    <div class="search-input">
        <input type="text" v-model="search" @change="setQuery" placeholder="Enter title name">
        <button v-if="search" type="reset" @click="clearQuery">Clear</button>
    </div>
    <div class="search-by-button">
        <p class="search-by-text"> SEARCH BY </p>
        <button class="btn" :class="{'active-btn': searchBy !== 'genres'}" type="submit" @click="searchByTitle">Title</button>
        <button class="btn" :class="{'active-btn': searchBy === 'genres'}" type="submit" @click="searchByGenre">Genre</button>
    </div>
  </div>
  <div class="filter-container">
    <p v-if="getTotalMovies > 1" class="found-films-count"> {{ getTotalMovies }} movie found </p>
    <div class="sort-filter">
      <p> SORT BY </p>
      <button class="btn" :class="{'active-btn': sortBy !== 'rating'}" type="submit" @click=""> Release date </button>
      <button class="btn" :class="{'active-btn': sortBy === 'rating'}" type="submit" @click=""> Rating </button>
    </div>
  </div>
<div class="container" v-if="getMovies">
  <div class="movies-container">
    <MovieComponent v-for="movie in getMovies" :key="movie.id" :requiredProps="movie"/>
  </div>
  <pagination v-if="totalPages > 1" base-route="Films" :current-page="Number($route.query.page)" :total-pages="totalPages"/>
  <div class="film-not-found" v-if="totalPages === 0">
    <p> No films found </p>
  </div>
</div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MovieComponent from "../components/MovieComponent";
import Pagination from "../components/Pagination";
const FILMS_PER_PAGE = 9;
export default {
  name: "MoviesView",
  components: {Pagination, MovieComponent},
  data(){
    return {
      offset: 0,
      FILMS_PER_PAGE,
      search: '',
      searchBy: 'title',
      sortBy: 'release_date'
    }
  },
  computed: {
    ...mapGetters([
      'getMovies',
      'getTotalMovies',
    ]),
    totalPages(){
      return Math.ceil(this.getTotalMovies / this.FILMS_PER_PAGE);
    }
  },
  methods: {
    ...mapActions(['getMovieList']),

    movieListRequest() {
      this.offset = this.$route.query.page ? (this.$route.query.page - 1) * this.FILMS_PER_PAGE : 0;
      this.getMovieList({
        search: this.search,
        searchBy: this.searchBy,
        sortBy: this.sortBy,
        sortOrder: 'desc',
        offset: this.offset,
        limit: this.FILMS_PER_PAGE,
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
      if(this.$route.query.search){
        this.search = this.$route.query.search;
        this.searchBy = this.$route.query.searchBy;
      }
      this.movieListRequest();
    }
  },
  created() {
    if(this.$route.query.search){
      this.search = this.$route.query.search;
      this.searchBy = this.$route.query.searchBy;
    }
    this.movieListRequest()
  }
}
</script>

<style lang="scss" scoped>

.container{
  max-width: 100%;
  height: 100%;
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
  background-image: url(../assets/img/backgroundFilms.jpeg);
  width: 100%;
  height: 390px;
  color: #ffffff;
}
.search-input button{
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
  justify-content: center;
  width: 90%;
}
.btn{
  background-color: rgba(35, 35, 35, 0.8);
  width: 80px;
  color: #ffffff;
  border: none;
  height: 35px;
}
.active-btn{
  background-color: rgba(204, 138, 181, 0.85);
}
.search-by-text{
  display: inline-flex;
  justify-content: flex-start;
  margin-right: 100px;
}
.film-not-found{
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
  height: 500px;
}
.filter-container{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  background: #555555;
  width: 100%;
  height: 70px;
  color: #ffffff;
}
.found-films-count{
  display: flex;
  left: 20%;
  padding-left: 80px;
}
.sort-filter{
  display: flex;
  align-items: center;
  padding-right: 80px;
}
</style>
