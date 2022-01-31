<template>
  <div>
    <h1>Домашняя страница розовых пони</h1>
    {{ ponyColor }}
    <br>Sqrt = {{ sqr }}
    <input v-model="ponyCountModel" @input="onInputChange">
    {{ ponyCount }}
    <div v-if="this.personInfo">
      {{ personInfo.query }}
    </div>

  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      ponyCountModel: 0,
    }
  },
  computed: {
    ...mapGetters([
      'ponyCount',
      'personInfo',
    ]),
    ponyColor() {
      return this.$store.state.ponyColor;
    },
    sqr() {
      return Math.sqrt(this.$store.state.ponyCount);
    },

  },
  methods: {
    ...mapActions([
      'fetchFata',
    ]),
    onInputChange() {
      this.$store.commit('SET_PONY_COUNT', this.ponyCountModel);
    },
  },
  created() {
    this.ponyCountModel = this.ponyCount;
    this.fetchFata();
  },
}

</script>

<style scoped>

</style>