<template>
  <productsNav/>
  <Header/>
</template>

<script>
import productsNav from "@/components/productsNav";
import Header from "@/views/Products/Header";
export default {
  name: "index.vue",
  components: {Header, productsNav}
}
</script>

<style scoped>

</style>