<template>
<br/>Dima's component
  <div>
    <button @click="$emit('baseClick','Submitted!')" v-if="isSubmit" class="buttonGreen" >Submit</button>
    <button @click="$emit('baseClick','Canceled!')" v-else class="button">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    isSubmit: {
      type: Boolean,
      default: true
    },
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
