<template>
  <Navbar/>
  <HomeView/>
  <Exterior/>
  <Products/>
  <About/>
  <Contact/>
  <Footer/>
</template>

<script>
import HomeView from "@/views/home/HomeView";
import Exterior from "@/views/home/Exterior";
import Products from "@/views/home/Products";
import About from "@/views/home/About";
import Contact from "@/views/home/Contact";
import Footer from "@/views/home/Footer";
import Navbar from "@/components/navbar";
export default {
  components: {Navbar, Footer, Contact, About, Products, Exterior, HomeView }
}
</script>