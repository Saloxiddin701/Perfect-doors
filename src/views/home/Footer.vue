<template>
  <footer class="footer py-10">
    <div class="row">
      <!--top-->
      <div class="flex items-center justify-between flex-wrap lg:justify-center">
        <div class="w-60">
          <img class="w-full object-cover" src="@/assets/images/logo2.svg" alt="">
        </div>
        <div class="flex justify-between w-1/2 lg:w-full lg:justify-center lg:gap-1">
          <button class="border-2 border-dark p-2 text-left lg:p-1 lg:text-center">
            Phone <br>
            <span class="font-bold text-sm">+998(99)877-42-12</span>
          </button>
          <button class="border-2 border-dark p-2 text-left lg:p-1 lg:text-center">
            Email <br>
            <span class="font-bold text-sm">example@mail.com</span>
          </button>
          <button class="border-2 border-dark p-2 text-left lg:p-1 lg:text-center">
            Services area <br>
            <span class="font-bold text-sm">Tashkent</span>
          </button>
        </div>
      </div>

      <!--center-->
      <div class="w-full flex justify-center">
        <FooterNav/>
      </div>

      <!--bottom-->
      <div class="flex justify-between mt-4">
        <span>&copy; 2022 by Perfect Doors</span>
        <span>Powered by Saloxiddin</span>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterNav from "@/components/footerNav";
export default {
  name: "Footer",
  components: {FooterNav}
}
</script>

<style scoped>

</style>