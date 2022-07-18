<template>
  <section class="top-products py-10">
    <div class="row">
      <div class="text-center mb-5">
        <h1 class="text-2xl">{{ $t('unlike') }}</h1>
        <h1 class="text-5xl text-brand uppercase">{{ $t('top_products') }}</h1>
      </div>
      <swiper :navigation="true"
              :modules="modules"
              :slides-per-view="setSliderPerView"
              :space-between="40"
              :loop="true"
              class="mySwiper"
      >
        <swiper-slide v-for="item in items" :key="item.id" class="">
          <h1 class="mb-3 text-xl">{{ item.title }}</h1>
          <img class="w-full h-80 object-cover" :src="item.img" alt="">
          <button class="text-left flex items-center uppercase mt-3">
            {{ $t('view_btn') }}
            <span class="ml-5 border-2 border-gray rounded-full px-2">&#10095;</span>
          </button>
        </swiper-slide>
      </swiper>
      <Footer class="mt-6"/>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import {mapGetters} from "vuex";
import Footer from "@/views/home/Footer";

export default {
  components: {
    Footer,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: '1',
          title: 'Lap siding',
          img: require('@/assets/images/exterior1.jpg')
        },
        {
          id: '2',
          title: 'Multi-Shake',
          img: require('@/assets/images/exterior2.jpg')
        },
        {
          id: '3',
          title: 'Trim',
          img: require('@/assets/images/exterior3.jpg')
        }
      ]
    }
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
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
