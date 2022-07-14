<template>
  <header class="header" :class="{ active: is_scrolled }">
    <nav class="row">
      <div class="logo">
        <img v-if="!is_scrolled" class="xl:w-60 md:w-56 sm:w-52 xs:w-48" src="@/assets/images/logo.svg" alt="">
        <img v-else class="xl:w-60 md:w-56 sm:w-52 xs:w-48" src="@/assets/images/logo2.svg" alt="">
      </div>
      <ul class="menu" v-if="!is_mobile">
        <li>{{ $t('navbar.home') }}</li>
        <li>{{ $t('navbar.about') }}</li>
        <li>{{ $t('navbar.contact') }}</li>
        <button class="border border-2 border-white text-white p-1" :class="{ 'text-dark border-dark': is_scrolled }"><a href="tel:+998998774212">+998998774212</a></button>
        <dropdown/>
      </ul>

      <div class="flex items-center xl:gap-10 md:gap-6 xs:gap-4" v-if="is_mobile">
        <div class="burger" @click="is_open = !is_open" v-if="is_mobile">
          <span v-if="!is_open">&#9776;</span>
          <span v-else>&#10006;</span>
        </div>

        <ul class="mobile-menu" :class="{ active: is_open }">
          <li>{{ $t('navbar.home') }}</li>
          <li>{{ $t('navbar.about') }}</li>
          <li>{{ $t('navbar.contact') }}</li>
          <button class="border border-2 border-dark text-dark p-1"><a href="tel:+998998774212">+998998774212</a></button>
        </ul>
        <dropdown/>
      </div>
    </nav>
  </header>
</template>

<script>
import dropdown from "@/components/dropdown";

export default {
  name: "Navbar",
  data() {
    return {
      is_scrolled: false,
      is_open: false,
      is_mobile: false,
    }
  },
  components: {dropdown},
  methods: {
    checkScreenWidth() {
      const width = window.innerWidth
      if (width <= 770) {
        this.is_mobile = true
      } else {
        this.is_mobile = false
      }
    },
    checkScrolled() {
      const scroll = pageYOffset
      if (scroll > 0) {
        this.is_scrolled = true
      } else {
        this.is_scrolled = false
      }
    }
  },
  mounted() {
    this.checkScrolled()
    this.checkScreenWidth()
    window.addEventListener('scroll', this.checkScrolled)
    window.addEventListener('resize', this.checkScreenWidth)
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 50px 0;
  transition: 0.5s;
  z-index: 999;
  color: #ffffff;

  &.active {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    color: #000000;
    padding: 25px 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 25px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .burger {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000000;
    }

    .mobile-menu {
      position: fixed;
      left: 0;
      top: 0;
      width: 250px;
      height: 100vh;
      background: #ffffff;
      padding: 25px;
      transform: translateX(-100%);
      transition: 0.5s;
      display: flex;
      flex-direction: column;

      &.active {
        transform: translateX(0);
      }

      li {
        font-size: 25px;
        padding: 15px 0;
        display: inline-block;
        color: #000000;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 25px;
      list-style: none;

      li {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>