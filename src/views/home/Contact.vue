<template>
  <section class="contact py-10">
    <div class="row">
      <div class="box flex justify-between items-center lg:flex-col px-10 py-10 bg-[url('@/assets/images/bg5.jpg')] rounded-tl-[100px] rounded-br-[100px]">
        <!--left-->
        <div class="w-1/2 lg:w-full">
          <h3 class="text-brand">Let's Discuss About</h3>
          <h1 class="text-brand text-5xl">Your next project</h1>
          <p class="mt-4 text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut blanditiis cum cumque dicta
            doloremque eligendi et excepturi incidunt, ipsa laudantium molestiae molestias, natus nisi nobis quos sequi,
            sunt voluptatum.
          </p>
          <button class="border-2 border-white rounded-r-3xl p-2 mt-1 text-white uppercase">Contact Us</button>
        </div>

        <!--right-->
        <form class="w-[40%] lg:w-full">
          <div class="w-full flex-wrap flex gap-6 lg:mt-6">
            <input type="text" placeholder="First name" class="p-2 placeholder-brand bg-gray focus:outline-none lg:w-full">
            <input type="text" placeholder="Last name" class="p-2 placeholder-brand bg-gray focus:outline-none lg:w-full">
            <input type="email" placeholder="Email" class="p-2 placeholder-brand bg-gray focus:outline-none lg:w-full">
            <input type="number" placeholder="Phone" class="p-2 placeholder-brand bg-gray focus:outline-none lg:w-full">
          </div>
          <input type="text" class="w-[93%] mt-3 p-2 placeholder-brand bg-gray focus:outline-none lg:w-full lg:mt-6" placeholder="Subject">
          <button class="w-[93%] text-white bg-brand mt-2 py-2 uppercase lg:w-full lg:mt-6">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>