<template>
  <div class="footerNav w-1/2 mt-6">
    <div class="row">
      <ul class="list-none flex justify-between items-center flex-wrap lg:justify-center lg:gap-2">
        <li>{{ $t('navbar.home') }}</li>
        <li>{{ $t('navbar.about') }}</li>
        <li>{{ $t('navbar.products') }}</li>
        <li>{{ $t('navbar.design') }}</li>
        <li>{{ $t('navbar.request') }}</li>
        <li>{{ $t('navbar.contact') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerNav"
}
</script>

<style scoped>

</style>