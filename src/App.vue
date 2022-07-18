<template>
  <loader v-if="!is_loaded"/>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
import loader from '@/components/loader'

export default {
  data() {
    return {
      is_loaded: false
    }
  },
  components: { loader },
  created() {
    document.body.style.overflow = 'hidden'
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.is_loaded = true
      }
    }
    document.body.style.overflow = 'auto'

    //
    this.changeWindowWidth()
    window.addEventListener('resize', this.changeWindowWidth)
  },
  methods: {
    ...mapActions('ui', ['CHANGE_WINDOW_WIDTH']),
    changeWindowWidth() {
      this.CHANGE_WINDOW_WIDTH(window.innerWidth)
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.row{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 425px;
  }
  @media screen and (max-width: 425px) {
    max-width: 375px;
  }
  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
}
</style>
