<template>
<div v-if="getMovieId" class="film-container">
  <div class="film-img">
    <img :src="getMovieId.poster_path" alt="poster" width="350" height="550">
  </div>
  <div class="film-info">
    <div class="film-title-rating">
     <div class="film-title"> {{ getMovieId.title }} </div>
     <div class="film-rating"> {{ getMovieId.vote_average }} </div>
    </div>
    <div class="search-icon">
      <router-link :to="{name: 'Films'}"> <img src="../assets/img/searchIcon.jpeg" alt="search"> </router-link>
    </div>
    <div class="film-genres">
      {{ getMovieId.genres.join(' & ') }}
    </div>
    <div class="film-date-runtime">
     <div class="film-date" > {{ getMovieId.release_date.slice(0, 4) }} </div>
      <h v-if="getMovieId.release_date">year</h>
     <div class="film-runtime"> {{ getMovieId.runtime }} </div>
      <h v-if="getMovieId.runtime">min</h>
    </div>
    <div class="film-review">
    {{ getMovieId.overview }}
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";

export default {
  name: "FilmCard",

  data(){
    return {
      movieId: null,
    }
  },
  methods:{
    ...mapActions([
        'getMovieById',
    ]),
    movieIdRequest(){
      this.getMovieById(this.movieId)
    },
  },
  created() {
    this.movieId = this.$route.params.id;

    this.movieIdRequest();

  },
  computed: {
    ...mapGetters([
      'getMovieId',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.film-container{
  display: flex;
  max-width: 100%;
  max-height: 100%;
  background-image: url(../assets/img/backgroundFilms.jpeg);
  //background-color: #232323;
  color: #ffffff;
}
.film-img{
  display: flex;
  margin: 40px;
}
.film-info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  margin: 40px 10px 40px 0;
  padding: 40px;
  background: rgba(85, 85, 85, 0.5);
  width: 100%;
}
.film-title-rating{
  display: inline-flex;
  align-items: center;
}
.film-title{
  margin-right: 50px;
  font-size: 50px;
}
.film-rating{
  border: #555555 solid;
  color: #A1E66F;
  border-radius: 50%;
  width: 30px;
  font-size: 20px;
  padding: 10px;
}
.film-genres{
  font-size: 20px;
}
.film-date-runtime{
  display: inline-flex;
  align-items: baseline;

}
.film-date{
  color: rgba(204, 138, 181, 0.85);
  font-size: 25px;
  margin-right: 5px;
}
.film-runtime{
  color: rgba(204, 138, 181, 0.85);
  font-size: 25px;
  margin-right: 5px;
  margin-left: 10px;
}
.film-review{
  font-size: 23px;
  width: 50%;
  text-align: left;
}
.search-icon{
  position: fixed;
  top: 15%;
  right: 3%;
}

</style>