<template>
<br/>Dima's component
  <div >
    <button class="button" v-bind:class="{buttonGreen: !isRed }"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    isRed: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.button{
  background-color: red;
}
.buttonGreen{
  background-color: green;
}
</style>
