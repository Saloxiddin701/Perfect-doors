<template>
  <HomeView/>
  <Exterior/>
  <Products/>
</template>

<script>
import HomeView from "@/views/home/HomeView";
import Exterior from "@/views/home/Exterior";
import Products from "@/views/home/Products";
export default {
  components: {Products, Exterior, HomeView }
}
</script>