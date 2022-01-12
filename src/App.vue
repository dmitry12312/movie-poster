<template>
  <MainHeader/>
<!--  <br><router-link to="/about">Here u can find info about</router-link><br>-->
<!--  <router-link to="/faq">Here u can find questions</router-link>-->

  <router-view></router-view>
footer

</template>

<script>


import MainHeader from "./components/MainHeader";
export default {
  name: 'App',
  components: {
    MainHeader

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
  margin-top: 0;
}
</style>
