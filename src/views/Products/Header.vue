<template>
  <header class="header py-10 relative">
    <div class="row">
      <div class="box flex justify-between items-center w-full flex-wrap">
        <div class="w-[60%] h-screen flex items-center md:w-full">
          <div class="w-1/3 h-screen bg-brand absolute left-0 top-0 -z-10"></div>
          <img src="@/assets/images/pro_header.jpg" class="w-full h-96 object-cover" alt="">
        </div>
        <div class="w-[38%] text-left flex-col gap-4 flex md:w-full">
          <h2 class="text-2xl">Beautiful wood siding</h2>
          <h1 class="text-7xl md:text-4xl">Enhance your architecture</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa, dolores, doloribus eaque
            laboriosam nesciunt quas quia recusandae repellendus, ut voluptas voluptatum. Mollitia, qui, quisquam! Aut
            blanditiis mollitia odio quod!
          </p>
          <button class="text-left flex items-center">
            Learn more
            <span class="ml-5 border-2 border-gray rounded-full px-2">&#10095;</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>