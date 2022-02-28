<template lang="html">
  <div
    class="fixed flex top-0 h-20 w-screen font-pp z-10 shadow justify-between bg-white"
  >
    <div class="flex">
      <nuxt-link
        class="transition ease-in-out text-gray-800 font-pp flex items-center space-x-2 px-12 hover:text-indigo-500"
        to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          /></svg
        ><span class="font-bold text-xl">Ormeneze</span></nuxt-link
      >
      <ul class="flex items-center px-10 space-x-2">
        <li v-for="(nav, index) in navs" :key="index">
          <nuxt-link
            class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-600 text-sm"
            :to="nav.link"
            >{{ nav.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="mr-16 flex justify-center items-center">
      <nuxt-link
        to="/orcamentos"
        class="transition ease-in-out border border-gray-800 flex p-4 hover:bg-gray-800 hover:text-white text-sm"
        >Orçamentos</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const navs = [
  { name: 'Home', link: '#inicio' },
  { name: 'Sobre', link: '#sobre' },
  { name: 'Serviços', link: '#servicos' },
  { name: 'Trabalhos', link: '#trabalhos' },
  { name: 'Contato', link: '#contato' },
]

export default Vue.extend({
  name: 'TopMenu',
  data() {
    return {
      navs,
    }
  },
})
</script>
