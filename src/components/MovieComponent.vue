<template>
  <div>
    <router-link class="router-link" :to="{ name: 'FilmCardView', params: { id: requiredProps.id}}">
      <div class="film-container">
        <div class="img-container">
          <img class="movieImg" :src="requiredProps.poster_path" alt="POSTER">
        </div>
        <div class="film-info">
          <div class="film-row">
            <div class="film-title"> {{ requiredProps.title }}</div>
            <div class="film-year"> {{ requiredProps.release_date.slice(0, 4) }}</div>
          </div>
          <div class="film-genre"> {{ requiredProps.genres.join(' & ') }}</div>
        </div>
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "MovieComponent",
  props: {
    requiredProps: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.film-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.film-container {
  max-width: 300px;
  margin: 15px 20px;

}

.movieImg {
  width: 100%;
  height: 100%;
}

.img-container {
  width: 300px;
  height: 420px;
  margin-bottom: 8px;
}

.film-info {
  color: #ffffff;
  font-family: sans-serif;
}

.film-year {
  border: solid 1px #555555;
  padding: 3px;
  font-size: 13px;
  border-radius: 5px;
}

.film-genre {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  margin-top: 2px;
}

.film-title {
  font-size: 16px;
  font-weight: bolder;
}

.router-link {
  text-decoration: none;
}
</style>