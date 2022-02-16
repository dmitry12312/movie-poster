<template>
<h1>Главные вопросы про пони</h1>
<h3>Что бы узнать ответ на вопрос - нажми на него!</h3>
  <ul id="questions">
    <li><router-link to="/about">Кто такие эти пони?</router-link></li>
    <li><a href="https://prom.ua/Rozovyj-poni.html" target="_blank">Где можно приобрести себе розового пони?</a></li>
    <li><a href="https://www.zoovet.ru/stati/entsiklopediya-vidov-zhivotnykh/loshadi_i_poni/poni/" target="_blank">Где живут пони?</a></li>
  </ul>
</template>

<script>

export default {
  name: "FaqView",
  components: {}
}
</script>

<style scoped>
#questions{

  text-align: left;
  background-color: rgba(204, 138, 181, 0.85);
}
#questions a{
  text-decoration: none;
  color: white;
}
</style>