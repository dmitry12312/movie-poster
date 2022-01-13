<template>
  <ul id="menu">
    <li id="home">
      <router-link to="/"><img src="../assets/img/pinkPony.jpeg" height="25" width="25" alt="Home"/></router-link>
    </li>
    <li class="navi">
      <router-link to="/faq">Faq</router-link>
    </li>
    <li class="navi">
      <router-link to="/about">About</router-link>
    </li>
  </ul>
</template>


<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>
 .navi {
  display: inline-flex;
  justify-content: center;
   justify-self: center;
   justify-items: center;
  /*flex-direction: row;*/
   margin: 0;
   padding: 0;
}
 #home {
   display: inline-flex;
   justify-content: left;
   justify-self: left;
   justify-items: left;
   /*flex-direction: row;*/
   margin: 0;
   padding: 0;
 }

#menu {
  margin: 0; /* убрать внутренние отступы */
  padding: 0; /* убрать внешние отступы */
  /*padding: 0;*/
  /*text-align: center;*/
  background: rgba(204, 138, 181, 0.85); /* цвет фона навигационной панели */

}


/*#menu li {*/
/*  display: inline-block; !* расположить пункты горизонтально *!*/
/*  flex-direction: row;*/
/*  justify-content: center;*/
/*  text-align: center; !* текст горизонтально по центру *!*/
/*}*/

#menu a {
  display: inline-block; /* ссылка растягивается на весь пункт li */
  padding: 5px 15px; /* задаем внутренние отступы */
  color: #fff; /* цвет текста */
  text-decoration: none; /* убрать нижнее подчёркивание у ссылок */
}

#menu a:hover {
  background: #8AB8CC; /* фон пунктов при наведении */
}
</style>