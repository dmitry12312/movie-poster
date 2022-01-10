<template>
  <div>
    <input v-if="isInput" type="text" v-model="value"/>
    <textarea v-else v-model="value"/>
    <p>Message is: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseIput",
  props:{
    isInput:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      value: ""
    }
  }
}
</script>

<style scoped>

</style>