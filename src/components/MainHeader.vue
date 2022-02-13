<template>
  <div class="menu">
    <router-link class="header-img" to="/"><img src="../assets/img/pinkPony.jpeg" height="25" width="25" alt="Home"/></router-link>
    <ul class="header-link">
      <li class="nav">
        <router-link to="/faq">Faq</router-link>
      </li>
      <li class="nav">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav">
        <router-link to="/crypto">Crypto</router-link>
      </li>
      <li class="nav">
        <router-link to="/films">Films</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>
 .menu{
   padding: 2px;
   margin: 0;
   display: flex;
   background-color: rgba(204, 138, 181, 0.85);
   justify-content: center;
 }
 .menu a{
   color: #fff;
   text-decoration: none;
 }
 .menu li{
   list-style-type: none;
 }
 .menu a:hover{
    background-color: #555555;
 }
 .header-link{
   display: inline-flex;
   flex-direction: row;
 }
 .header-img{
   position: absolute;
   top: 1%;
   left: 11px;
 }
 .nav{
   margin-right: 20px;
 }
</style>
