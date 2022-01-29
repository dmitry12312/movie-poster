<template>
  <div>
    <h1>Домашняя страница розовых пони</h1>
    {{ ponyColor }}
    {{ sqr }}
    <input ref="input" v-model="ponyCountModel" @input="onInputChange">
    {{ ponyCount }}
    <!--    <base-button @baseClick="baseClickHandler"></base-button>-->
  </div>
</template>

<script>
// import BaseButton from "../components/BaseButton";
import {mapGetters} from "vuex";

export default {
  name: "HomeView",
  // components: {BaseButton},
  data() {
    return {
      ponyCountModel: 0, // исправил
    }
  },
  computed: {
    ...mapGetters(['ponyCount']),
    ponyColor() {
      return this.$store.state.ponyColor;
    },
    sqr() {
      return Math.sqrt(this.$store.state.ponyCount);
    },

  },
  methods: {
    // baseClickHandler(msg){
    //   alert(msg);
    // }
    onInputChange() {
      this.$store.commit('SET_PONY_COUNT', this.ponyCountModel);
    }
  },
  created(){
    this.ponyCountModel = this.ponyCount;
  },
}
</script>

<style scoped>

</style>