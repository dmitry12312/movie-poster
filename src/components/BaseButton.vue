<template>
<br/>
  <div>
    <button @click="$emit('baseClick','Submitted!')" v-if="isSubmit" class="buttonGreen" ><slot>Submit</slot></button>
    <button @click="$emit('baseClick','Canceled!')" v-else class="button"><slot>Cancel</slot></button>
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
