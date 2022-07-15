<template>
  <section class="about py-10">
    <div class="row">
      <div class="title text-center">
        <h2 class="text-xl">What makes us Different</h2>
        <h1 class="text-5xl">Why Choose Us</h1>
      </div>
      <div class="box flex justify-between items-center lg:flex-col lg:gap-5 lg:justify-center mt-6">
        <!--left-->
        <div class="flex flex-col justify-between items-center p-10 bg-brand rounded-tr-[100px] rounded-bl-[100px]">
          <img class="w-12 h-12 p-2 bg-white rounded-full" src="@/assets/icons/file.svg" alt="">
          <h1 class="text-white text-4xl">free quotes</h1>
          <h3 class="w-60 text-center mt-6 text-white">Easy request process with quick turnaround times</h3>
        </div>

        <!--center-->
        <div class="flex flex-col justify-between items-center p-10 border-2 border-brand rounded-tl-[100px] rounded-br-[100px]">
          <img class="w-12 h-12 p-2 bg-gray rounded-full" src="@/assets/icons/business.svg" alt="">
          <h1 class="text-brand text-4xl">free quotes</h1>
          <h3 class="w-60 text-center mt-6 text-brand">Easy request process with quick turnaround times</h3>
        </div>

        <!--right-->
        <div class="flex flex-col justify-between items-center p-10 border-2 border-brand rounded-tr-[100px] rounded-bl-[100px]">
          <img class="w-12 h-12 p-2 bg-gray rounded-full" src="@/assets/icons/person.svg" alt="">
          <h1 class="text-brand text-4xl">free quotes</h1>
          <h3 class="w-60 text-center mt-6 text-brand">Easy request process with quick turnaround times</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>