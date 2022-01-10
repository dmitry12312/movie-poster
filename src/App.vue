<template>
  <img :alt="alt" :src="imageSrc">
  <button @click="onClick">Magic</button>
  <BaseButton :isRed="false"/>
  <BaseInput :isInput="false"/>
  <BaseInput/>

</template>

<script>
import BaseButton from "./components/BaseButton";
import BaseInput from "./components/BaseInput";

export default {
  name: 'App',
  components: {
    BaseInput,
    BaseButton,
  },
  data(){
    return {
      msg: "Добро пожаловать в наш мир розовых пони",
      imageSrc: "@/assets/logo.png",
      alt: "Vue logo",
    }
  },
  methods:{
    onClick(){
      this.msg = "Добро пожаловать в наш магический мир"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
