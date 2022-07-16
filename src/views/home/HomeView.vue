<template>
  <section class="hero min-h-screen rounded-br-[90px] overflow-hidden">
    <div class="hero-slider h-full">
      <Swiper
          class="relative"
          :slides-per-view="setSliderPerView"
          :space-between="0"
          :loop="true"
          :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
          :modules="[Autoplay]"
      >
        <SwiperSlide v-for="img in slider_images" :key="img" class="relative">
          <img class="w-full h-screen object-cover" :src="img" alt="hero-image">
        </SwiperSlide>
      </Swiper>
    </div>
    <div
        class="hero-content
        absolute top-1/2
        pl-36 pt-56 w-1/2 h-full
        -translate-y-1/2 z-10
        text-white
        md:w-full
        lg:pt-40
        xs:pl-16 xs:pt-40
        pointer-events-none
        titles"
    >
      <div class="flex flex-col w-full">
        <h2 class="title lg:text-2xl">{{ $t('hero.title') }}</h2>
        <h2 class="subtitle text-7xl md:text-4xl">{{ $t('hero.subtitle') }}</h2>
        <p class="text mt-6">{{ $t('hero.text') }}</p>
        <a href="#" class="border border-white rounded-r-3xl w-1/2 text-center p-2 mt-4 lg:p-1 lg:text-sm uppercase">{{ $t('hero.button') }}</a>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex"
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters('ui', ['GET_WINDOW_WIDTH']),
    setSliderPerView() {
      if (this.GET_WINDOW_WIDTH < 768) {
        return 1
      } else if (this.GET_WINDOW_WIDTH < 1024) {
        return 2
      } else {
        return 3
      }
    }
  },
  data() {
    return {
      Autoplay,
      slider_images: [
        require("@/assets/images/bg1.jpg"),
        require("@/assets/images/bg2.jpg"),
        require("@/assets/images/bg3.jpg"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.titles {
  background: linear-gradient(90deg, rgba(193, 142, 97, 1) 10%, rgba(193, 142, 97, 1) 35%, rgba(193, 142, 97, 0) 100%);
}
</style>
