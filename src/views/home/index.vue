<template>
  <HomeView/>
  <Exterior/>
  <Products/>
  <About/>
  <Contact/>
</template>

<script>
import HomeView from "@/views/home/HomeView";
import Exterior from "@/views/home/Exterior";
import Products from "@/views/home/Products";
import About from "@/views/home/About";
import Contact from "@/views/home/Contact";
export default {
  components: {Contact, About, Products, Exterior, HomeView }
}
</script>