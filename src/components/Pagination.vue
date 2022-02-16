<template>
<div class="pagination-container">
  <div class="pagination" v-if="currentPage > 1 && (currentPage < totalPages)">
    <router-link  :to="{name: baseRoute, query: pageLink(1)}"> {{ '<<' }} </router-link>
    <router-link  :to="{ name: baseRoute, query: pageLink(currentPage - 1) }"> {{ currentPage - 1 }} </router-link>
    <router-link class="active" exact :to="{ name: baseRoute, query: pageLink(currentPage) }"> {{ currentPage }} </router-link>
    <router-link  :to="{ name: baseRoute, query: pageLink(currentPage + 1)}"> {{ currentPage + 1 }} </router-link>
    <router-link  :to="{name: baseRoute, query: pageLink(totalPages)}"> {{ '>>' }} </router-link>
  </div>
  <div class="pagination" v-else-if="totalPages === 2">
    <router-link :class="{active: Number(this.$route.query.page) === 1 || !this.$route.query.page}" exact :to="{ name: baseRoute, query: pageLink(1) }"> 1 </router-link>
    <router-link :class="{active: Number(this.$route.query.page) === 2}" exact :to="{name: baseRoute, query: pageLink(2)}"> 2 </router-link>
  </div>
  <div class="pagination" v-else-if="currentPage === totalPages">
    <router-link  :to="{name: baseRoute, query: pageLink(1)}"> {{ '<<' }} </router-link>
    <router-link  :to="{ name: baseRoute, query : pageLink(currentPage - 2)}"> {{ currentPage - 2 }} </router-link>
    <router-link  :to="{ name: baseRoute, query : pageLink(currentPage - 1)}"> {{ currentPage - 1 }} </router-link>
    <router-link class="active" exact :to="{ name: baseRoute, query: pageLink(currentPage)}"> {{ currentPage }} </router-link>
  </div>
  <div class="pagination" v-else>
    <router-link class="active" exact :to="{name: baseRoute, query: pageLink(1)}"> 1 </router-link>
    <router-link  :to="{name: baseRoute, query: pageLink(2)}"> 2 </router-link>
    <router-link  :to="{name: baseRoute, query: pageLink(3)}"> 3 </router-link>
    <router-link  :to="{name: baseRoute, query: pageLink(totalPages)}"> {{ '>>' }} </router-link>
  </div>
</div>
</template>

<script>

export default {
  name: "Pagination",
  props: {
    baseRoute:{
      type: String,
      required: true,
    },
    currentPage:{
      type: Number,
      default: 1,
    },
    totalPages:{
      type: Number,
      default: 10,
    },
  },
  methods: {
    pageLink(page){
      if (this.$route.query){
        let query = {...this.$route.query}
        query.page = page
        return query
      } else {
        return {
          page: page
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.router-link-active.active{
  background-color: rgba(204, 138, 181, 0.85);
}

.pagination{
  display: inline-flex;
  color: white;
  margin-bottom: 10px;
}
.pagination a{
  color: white;
  border: solid 1px #555555;
  border-radius: 3px;
  width: 30px;
  padding: 4px;
  margin: 0 auto;
  text-decoration: none;
}
.pagination a:hover{
  color: #555555;
}
.pagination-container{
  margin-top: 30px;
}
</style>
