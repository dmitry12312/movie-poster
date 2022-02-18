<template>
  <meta name="viewport" content="width=device-width">
<div v-if="getMovieId" class="film-container">
  <div class="film-img">
    <img :src="getMovieId.poster_path" alt="poster">
  </div>
  <div class="film-info">
    <div class="film-title-rating">
     <div class="film-title"> {{ getMovieId.title }} </div>
     <div class="film-rating"> {{ getMovieId.vote_average }} </div>
    </div>
    <div class="back-icon">
      <img src="../assets/img/backIcon.png" alt="search" @click="$router.back()">
    </div>
    <div class="film-genres">
      {{ getMovieId.genres.join(' & ') }}
    </div>
    <div v-if="getMovieId.release_date" class="film-date-runtime">
      <h> Year: </h>
      <div class="film-runtime" > {{ getMovieId.release_date.slice(0, 4) }} </div>
      </div>
    <div v-if="getMovieId.runtime" class="film-date-runtime">
      <h> Duration: </h>
     <div class="film-runtime"> {{ getMovieId.runtime }} </div>
      <h>min</h>
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
  name: "FilmCardView",

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
      this.getMovieById(this.movieId);
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
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 100%;
  max-height: 100%;
  background-image: url(../assets/img/backgroundFilms.jpeg);
  color: #ffffff;
}

.film-img{
  display: flex;
  margin: 50px 20px 40px 40px;
  img{
    max-width: 100%;
    max-height: 100%;
  }
}
.film-info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  margin: 50px 10px 40px 20px;
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
  font-size: 20px;
}
.film-runtime{
  color: rgba(204, 138, 181, 0.85);
  font-size: 30px;
  margin-right: 5px;
  margin-left: 10px;
}
.film-review{
  font-size: 23px;
  width: 70%;
  text-align: left;
}
.back-icon{
  position: absolute;
  top: 60px;
  left: 1%;
  background: rgb(183,226,213);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.00005) 73%);

  img {
    height: 40px;
    object-fit: contain;
  }
}
.back-icon:hover{
  background-color: #555555;
}
.film-date-row{
  display: inline-flex;
}
.film-runtime-row{
  display: inline-flex;
}
@media (max-width: 1200px) {
  .film-container{
    max-width: 1190px;
    //flex-direction: column;
  }
  .film-img img{
    max-width: 300px;
  }
  .film-info{
    max-width: 850px;
  }
}
@media (max-width: 992px) {
  .film-container{
    max-width: 990px;
    flex-direction: column;

  }
  .film-img img{
    max-width: 650px;
  }
  .film-info{
    max-width: 450px;
  }
}
@media (max-width: 767px) {
  .film-container{
    max-width: none;
    flex-direction: column;
  }
  .film-img img{
    max-width: 650px;
  }
  .film-info{
    max-width: 440px;
  }
}
@media (max-width: 542px) {
  .film-container{
    max-width: 540px;
    flex-direction: column;
  }
  .film-img img{
    max-width: 400px;
  }
  .film-info{
    max-width: 350px;
  }
  .film-rating{
    font-size: 15px;
  }
  .film-title{
    font-size: 20px;
  }
  .film-genres{
    font-size: 15px;
  }
  .film-date-runtime{
    font-size: 15px;
  }
  .film-runtime{
    font-size: 20px;
  }
  .film-review{
    font-size: 15px;
  }
}
@media (max-width: 450px) {
  .film-container{
    max-width: 330px;
    flex-direction: column;
  }
  .film-img img{
    max-width: 230px;
  }
  .film-info{
    max-width: 200px;
  }
  .film-rating{
    font-size: 15px;
  }
  .film-title{
    font-size: 20px;
  }
  .film-genres{
    font-size: 15px;
  }
  .film-date-runtime{
    font-size: 15px;
  }
  .film-runtime{
    font-size: 20px;
  }
  .film-review{
    font-size: 15px;
  }
}

</style>