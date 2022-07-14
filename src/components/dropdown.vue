<template>
  <div class="relative">
    <button
        class="button"
        @click="toggleVisibility"
    >
      <img :src="`/flag_${$i18n.locale}.png`" alt="flag" class="h-[33.3px]">
      <span class="span">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path class="heroicon-ui"
              d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul @click="hideDropdown" v-if="isVisible" ref="dropdown">
        <li>
          <a
              href="#"
              @click.prevent="setLocale('uz')"
              ref="account"
          >
            <img src="/flag_uz.png" alt="Uzbek flag" class="h-[33.3px]">
            <span class="span">Uzbek</span>
          </a>
        </li>
        <li>
          <a
              href="#"
              @click.prevent="setLocale('ru')"
          >
            <img src="/flag_ru.png" alt="Russian flag">
            <span class="span">Русский</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    // startArrowKeys() {
    //   if (this.isVisible) {
    //     // this.$refs.account.focus()
    //     this.$refs.dropdown.children[0].children[0].focus()
    //   }
    // },
    // focusPrevious(isArrowKey) {
    //   this.focusedIndex = this.focusedIndex - 1
    //   if (isArrowKey) {
    //     this.focusItem()
    //   }
    // },
    // focusNext(isArrowKey) {
    //   this.focusedIndex = this.focusedIndex + 1
    //   if (isArrowKey) {
    //     this.focusItem()
    //   }
    // },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.hideDropdown()
    }

  }
}
</script>

<style scoped lang="scss">
.dropdown-fade-enter-active, .dropdown-fade-leave-active {
  transition: all .1s ease-in-out;
}

.dropdown-fade-enter, .dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.relative {
  position: relative;

  .button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    gap: 10px;

    img {
      width: 50px;
    }
  }

  ul {
    position: absolute;
    list-style: none;
    width: 150px;
    padding: 10px;
    margin: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(34, 41, 47, .05);
    box-shadow: 0 5px 25px rgb(34 41 47 / 10%);

    li {
      margin-bottom: 10px;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #6e6b7b;

        .span {
          margin-left: 10px;
        }

        img {
          width: 50px;
        }
      }
    }
  }
}
</style>
