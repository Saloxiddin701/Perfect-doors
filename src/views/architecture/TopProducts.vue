<template>
  <section class="top-products py-10 bg-[url('@/assets/images/bg5.jpg')]">
    <div class="row">
      <div class="head text-center flex flex-col items-center">
        <h3 class="text-2xl">Unlike Anything Else</h3>
        <h1 class="text-7xl mb-4">Top Exterior Products</h1>
      </div>
      <div class="box">
        <div class="item flex justify-between items-center flex-wrap my-6 even:flex-row-reverse" v-for="item in items" :key="item.id">
          <hr class="w-full my-6">
          <img class="w-[48%] h-60 object-cover" :src="item.img" alt="">
          <div class="right-side w-[48%]">
            <h1>{{ item.title }}</h1>
            <p>{{ item.text }}</p>
            <button class="text-left flex items-center uppercase mt-3">
              view product
            </button>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopProducts",
  data() {
    return {
      items: [
        {
          id: '1',
          title: 'Lap siding',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolorem dolorum earum esse ex exercitationem expedita explicabo facilis odio, pariatur quae quaerat quasi quidem quos sequi vitae voluptate voluptatibus.',
          img: require('@/assets/images/exterior1.jpg')
        },
        {
          id: '2',
          title: 'Multi-Shake',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolorem dolorum earum esse ex exercitationem expedita explicabo facilis odio, pariatur quae quaerat quasi quidem quos sequi vitae voluptate voluptatibus.',
          img: require('@/assets/images/exterior2.jpg')
        },
        {
          id: '3',
          title: 'Trim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolorem dolorum earum esse ex exercitationem expedita explicabo facilis odio, pariatur quae quaerat quasi quidem quos sequi vitae voluptate voluptatibus.',
          img: require('@/assets/images/exterior3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>