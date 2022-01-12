<template>
  <ul id="menu">
    <li id="home"><router-link to="/"><img src="../assets/img/pinkPony.jpeg" height="23" width="25" alt="Home"/></router-link></li>
    <li><router-link to="/faq">Faq</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
</template>


<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>
li{
  display: inline-block;
}
#menu, #menu li {

  margin: 0; /* убрать внутренние отступы */

  padding: 0; /* убрать внешние отступы */

}

#menu {
  padding: 0;
  text-align: center;
  background: rgba(204, 138, 181, 0.85); /* цвет фона навигационной панели */

}
#home{
  float: left;
  margin: 0;
}

#menu li{

  display:inline-block; /* расположить пункты горизонтально */

  text-align: left; /* текст горизонтально по центру */

}

#menu a {

  display: block; /* ссылка растягивается на весь пункт li */

  padding: 5px 15px; /* задаем внутренние отступы */

  color: #fff; /* цвет текста */

  text-decoration: none; /* убрать нижнее подчёркивание у ссылок */

}

#menu a:hover {

  background: #8AB8CC; /* фон пунктов при наведении */

}
</style>