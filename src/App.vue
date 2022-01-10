<template>
  <img :alt="alt" :src="imageSrc">
  <HelloWorld msg="false" money="42"/>
  <button @click="onClick">Magic</button>
  <BaseButton @baseClick="xyi" :isSubmit="true" > Submit </BaseButton>
  <BaseButton @baseClick="xyi" :isSubmit="false"> Cancel </BaseButton>
  <BaseInput :isInput="false"/>
  <BaseInput/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseButton from "./components/BaseButton";
import BaseInput from "./components/BaseInput";

export default {
  name: 'App',
  components: {
    BaseInput,
    BaseButton,
    HelloWorld,
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
    },
    xyi(text){
      alert(text)
    },

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
