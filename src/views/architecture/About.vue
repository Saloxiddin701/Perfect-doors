<template>
  <section class="about bg-[url('@/assets/images/bg5.jpg')] py-10">
    <div class="row">
      <div class="parent flex justify-center">
        <div class="text-center w-1/2 md:w-full">
          <h3 class="text-2xl">{{ $t('exterior.title') }}</h3>
          <h1 class="text-6xl text-brand">{{ $t('exterior.subtitle') }}</h1>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis deserunt error, est harum illo
            illum impedit
          </p>
          <button class="w-24 h-24 rounded-full uppercase border-2 border-gray my-2">{{ $t('know_btn') }}</button>
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