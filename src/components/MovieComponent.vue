<template>
<div>
  {{ requiredProps }}
  <img :src="requiredProps.poster_path" alt="poster">
  <div>
    <h1> {{ requiredProps.title }}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: "MovieComponent",
  props: {
    requiredProps: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>