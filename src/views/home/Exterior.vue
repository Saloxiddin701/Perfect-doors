<template>
  <section class="exterior py-10">
    <div class="row lg:px-20 xs:px-0">
      <div class="flex justify-between items-center flex-wrap py-8">
        <!--left-->
        <div class="left relative">
          <img class="lg:w-96 lg:h-96 md:w-80 md:h-80 object-cover rounded-tr-[100px] rounded-bl-[100px]" src="@/assets/images/product1.jpg" alt="">
          <img class="rounded-tl-[100px] rounded-br-[100px] absolute top-1/2 left-1/2 lg:w-60 lg:h-60 md:w-52 md:h-52 md:left-48 xs:w-48 xs:h-48 xs:left-48 object-cover" src="@/assets/images/product2.jpg" alt="">
        </div>

        <!--right-->
        <div class="lg:w-1/2 md:w-full md:mt-16 xs:mt-20">
          <h2 class="text-xl text-brand">{{ $t('exterior.title') }}</h2>
          <h1 class="text-5xl text-brand">{{ $t('exterior.subtitle') }}</h1>
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