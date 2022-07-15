<template>
  <section class="contact py-10">
    <div class="row">
      <div class="box flex justify-between items-center px-10 py-10 bg-[url('@/assets/images/bg5.jpg')]">
        <!--left-->
        <div class="w-1/2">
          <h3>Let's Discuss About</h3>
          <h1>Your next project</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut blanditiis cum cumque dicta
            doloremque eligendi et excepturi incidunt, ipsa laudantium molestiae molestias, natus nisi nobis quos sequi,
            sunt voluptatum.
          </p>
          <button>Contact US</button>
        </div>

        <!--right-->
        <form class="w-[40%]">
          <div class="w-full flex-wrap flex gap-6">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
          </div>
          <input type="text" class="w-full mt-3">
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