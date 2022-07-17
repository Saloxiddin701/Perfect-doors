<template>
  <section class="header py-10 bg-[url('@/assets/images/bg5.jpg')]">
    <div class="row">
      <div class="box flex justify-between items-end flex-wrap mt-20">
        <!--left-->
        <div class="w-1/3 md:w-full">
          <h2 class="text-2xl">Beautiful Wood Siding</h2>
          <h1 class="text-5xl text-brand">Enhance Your Architecture</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsa ipsam, maxime nisi nostrum ratione
            veniam voluptas voluptates.
          </p>
          <button class="w-20 h-20 rounded-full uppercase border-2 border-gray my-2">know more</button>
          <img class="h-44 w-full object-cover" src="@/assets/images/pro_1.jpg" alt="">
        </div>

        <!--right-->
        <div class="w-[65%] md:w-full md:mt-4">
          <img src="@/assets/images/pro_2.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>