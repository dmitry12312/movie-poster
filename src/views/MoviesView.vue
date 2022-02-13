<template>
<div class="container" v-if="getMovies">
  <div class="movies-container">
    <MovieComponent v-for="movie in getMovies" :key="movie.id" :requiredProps="movie"/>
  </div>

  <div class="pagination" v-if="$route.query.page > 1 && (Number($route.query.page) < Math.ceil(getTotalMovies / 9))">
    <router-link  :to="{name:'Films', query:{ page : 1}}"> {{ '<<' }} </router-link>
    <router-link  :to="{ name:'Films', query:{ page : $route.query.page - 1 }}"> {{ $route.query.page - 1 }} </router-link>
    <router-link class="active" exact :to="{ name:'Films', query:{ page : $route.query.page }}"> {{ $route.query.page }} </router-link>
    <router-link  :to="{ name:'Films', query:{ page : Number($route.query.page) + 1 }}"> {{ Number($route.query.page) + 1 }} </router-link>
    <router-link  :to="{name:'Films', query:{ page : Math.ceil(getTotalMovies / 9)}}"> {{ '>>' }} </router-link>
  </div>
  <div class="pagination" v-else-if="Number($route.query.page) === Math.ceil(getTotalMovies / 9)">
    <router-link  :to="{name:'Films', query:{ page : 1}}"> {{ '<<' }} </router-link>
    <router-link  :to="{ name:'Films', query : { page : $route.query.page - 2 }}"> {{ $route.query.page - 2 }} </router-link>
    <router-link  :to="{ name:'Films', query : { page : $route.query.page - 1 }}"> {{ $route.query.page - 1 }} </router-link>
    <router-link class="active" exact :to="{ name:'Films', query:{ page: $route.query.page }}"> {{ $route.query.page }} </router-link>
  </div>
  <div class="pagination" v-else>
    <router-link class="active" exact :to="{ name:'Films', query:{ page: 1 }}"> 1 </router-link>
    <router-link  :to="{ name:'Films', query:{ page: 2 }}"> 2 </router-link>
    <router-link  :to="{ name:'Films', query:{ page: 3 }}"> 3 </router-link>
    <router-link  :to="{name:'Films', query:{ page : Math.ceil(getTotalMovies / 9)}}"> {{ '>>' }} </router-link>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MovieComponent from "../components/MovieComponent";

export default {
  name: "MoviesView",
  components: {MovieComponent},
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
.router-link-active.active{
  background-color: rgba(204, 138, 181, 0.85);
}
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
.pagination{
  display: inline-flex;
  color: white;
  margin-bottom: 10px;
}
.pagination a{
  color: white;
  border: solid 1px #555555;
  border-radius: 3px;
  width: 30px;
  padding: 4px;
  margin: 0 auto;
  text-decoration: none;
}
.pagination a:hover{
  color: #555555;
}

</style>