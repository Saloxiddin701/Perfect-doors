<template>
  <section class="products py-10">
    <div class="row">
      <div class="head flex items-center justify-between">
        <h1 class="text-3xl text-brand">{{ $t('products.head.title') }}</h1>
        <button class="border border-gray p-2 uppercase mt-2 rounded-r-3xl text-gray lg:p-1 lg:text-xs">{{
            $t('products.head.button')
          }}
        </button>
      </div>
      <div class="box flex items-center justify-between flex-wrap mt-5">
        <!--left-->
        <div class="left w-[45%] lg:w-full h-96 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
          <div class="div relative h-96">
            <img class="w-full h-full object-cover" src="@/assets/images/product3.jpg" alt="">
            <div class="absolute z-10 left-0 bottom-0 w-full px-16 py-5 item">
              <h1 class="text-white">Some title</h1>
              <button class="border border-gray p-2 uppercase mt-2 rounded-r-3xl text-gray">{{
                  $t('products.head.button')
                }}
              </button>
            </div>
          </div>
        </div>

        <!--right-->
        <div class="right w-[45%] lg:w-full md:flex md:justify-between lg:mt-5">
          <div class="rounded-tr-[100px] md:w-[45%] rounded-bl-[100px] overflow-hidden relative div1">
            <img class="object-cover w-full h-40 md:h-full img1" src="@/assets/images/product4.jpg"
                 alt="">
            <div
                class="absolute z-10 left-0 top-0 md:top-20 -translate-y-1/2 w-full h-full px-16 py-16 md:pt-24 md:pl-6 item1">
              <h1 class="text-white">Some title</h1>
              <button class="border border-gray p-2 uppercase mt-2 rounded-r-3xl text-gray md:text-xs md:p-1">{{
                  $t('products.head.button')
                }}
              </button>
            </div>
          </div>
          <div class="rounded-tl-[100px] md:w-[45%] rounded-br-[100px] mt-6 md:mt-0 overflow-hidden relative div2">
            <img class="object-cover w-full h-48 md:h-full img2"
                 src="@/assets/images/product5.jpg" alt="">
            <div class="absolute z-10 left-0 bottom-0 w-full px-16 py-5 rounded-br-[100px] md:pl-6 item2">
              <h1 class="text-white">Some title</h1>
              <button class="border border-gray p-2 uppercase mt-2 rounded-r-3xl text-gray md:p-1 md:text-xs">{{
                  $t('products.head.button')
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products"
}
</script>

<style scoped>
.item {
  transform: translateY(100%);
  transition: 0.4s;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.022846638655462215) 100%);
}

.left .div:hover .item {
  transform: translateY(0);
  transition: 0.4s;
}

.item1 {
  opacity: 0;
  pointer-events: none;
  transform: translateY(100%);
  transition: 0.4s;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.022846638655462215) 100%);
}

.right .div1:hover .item1 {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
  transition: 0.4s;
}

.item2 {
  opacity: 0;
  pointer-events: none;
  transform: translateY(100%);
  transition: 0.4s;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.022846638655462215) 100%);
}

.right .div2:hover .item2 {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
  transition: 0.4s;
}
</style>