<template>
  <navbar/>
  <Header/>
  <About/>
  <TopProducts/>
</template>

<script>
import Navbar from "@/components/navbar";
import Header from "@/views/architecture/Header";
import About from "@/views/architecture/About";
import TopProducts from "@/views/architecture/TopProducts";
export default {
  components: {TopProducts, Header, Navbar, About}
}
</script>