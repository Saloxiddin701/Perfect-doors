<template>
  <productsNav/>
  <Header/>
  <products-view/>
  <top-products/>
</template>

<script>
import productsNav from "@/components/productsNav";
import Header from "@/views/Products/Header";
import ProductsView from "@/views/Products/ProductsView";
import TopProducts from "@/views/Products/TopProducts";
export default {
  name: "index.vue",
  components: {TopProducts, ProductsView, Header, productsNav}
}
</script>

<style scoped>

</style>