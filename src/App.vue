<template>
  <img :alt="alt" :src="imageSrc">
  <HelloWorld msg="false" money="42"/>
  <button @click="onClick">Magic</button>
  <BaseButton @baseClick="xyi" :isSubmit="true" ></BaseButton>
  <BaseButton @baseClick="xyi" :isSubmit="false"></BaseButton>
  <BaseSlots>
    <template v-slot:header>
      <h1>Главный парграф</h1>
    </template>
    <template v-slot:main>
      <p>Основной текст</p>
      <p>Тут указывается основная информация про розовых пони</p>
    </template>
  </BaseSlots>
  <BaseInput :isInput="false"/>
  <BaseInput/>
 <BaseSlots>
   <template v-slot:footer>
     <p>Контакты для покупки того самого розового пони:</p>
     <p>Tel: +380(68)122-53-86</p>
     <p>Telegram: @Dima_Desh</p>
   </template>
 </BaseSlots>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseButton from "./components/BaseButton";
import BaseInput from "./components/BaseInput";
import BaseSlots from "./components/BaseSlots";

export default {
  name: 'App',
  components: {
    BaseSlots,
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
