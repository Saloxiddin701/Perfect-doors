<template>
  <section class="exterior py-10">
    <div class="row">
      <div class="flex justify-between items-center flex-wrap py-8">
        <!--left-->
        <div class="left relative">
          <img class="w-96 h-96 object-cover rounded-tr-[100px] rounded-bl-[100px]" src="@/assets/images/product1.jpg" alt="">
          <img class="rounded-tl-[100px] rounded-br-[100px] absolute top-1/2 left-1/2 w-60 h-60 object-cover" src="@/assets/images/product2.jpg" alt="">
        </div>

        <!--right-->
        <div class="w-1/2 lg:w-full lg:mt-16">
          <h2 class="text-xl text-brand">{{ $t('exterior.title') }}</h2>
          <h1 class="text-5xl text-brand lg:text-4xl">{{ $t('exterior.subtitle') }}</h1>
          <p class="text-xl mt-4">{{ $t('exterior.text') }}</p>
          <button class="border border-gray p-2 uppercase mt-2 rounded-r-3xl text-gray">{{ $t('exterior.button') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Exterior"
}
</script>

<style scoped lang="scss">
//.left {
//  &:before {
//    content: '';
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    width: 70%;
//    height: 70%;
//    background: url("../../assets/images/product2.jpg") no-repeat center / cover;
//    border-top-left-radius: 100px;
//    border-bottom-right-radius: 100px;
//  }
//}
</style>