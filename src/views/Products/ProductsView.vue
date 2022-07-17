<template>
  <section class="products-view py-10">
    <div class="row">
      <div class="box flex justify-between items-center flex-wrap">
        <!--left-->
        <div class="w-[45%]">
          <h1 class="text-2xl">Where Beauty Meets durability</h1>
          <h1 class="text-5xl text-brand">Enhanced Exterior Products</h1>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti distinctio ea eius harum illum non,
            veniam voluptate? Consequuntur debitis dicta ex excepturi harum iste nulla officiis possimus voluptates
            voluptatibus?
          </p>
          <button class="text-left flex items-center uppercase mt-3">
            more about us
            <span class="ml-5 border-2 border-gray rounded-full px-2">&#10095;</span>
          </button>
        </div>

        <!--right-->
        <div class="relative w-1/2 h-screen">
          <img class="absolute border-8 border-white w-60 h-80 top-48 left-32 z-10 object-cover" src="@/assets/images/pro_1.jpg" alt="">
          <img class="absolute border-8 border-white w-56 left-20 object-cover" src="@/assets/images/pro_2.jpg" alt="">
          <img class="absolute border-8 border-white w-60 top-24 object-cover" src="@/assets/images/pro_3.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsView"
}
</script>

<style scoped>

</style>