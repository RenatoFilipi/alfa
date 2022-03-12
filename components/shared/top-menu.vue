<template lang="html">
  <div
    class="fixed flex top-0 h-20 w-screen font-pp z-10 shadow justify-between bg-white"
  >
    <div class="flex">
      <nuxt-link
        class="transition ease-in-out text-gray-900 font-pp flex items-center space-x-2 px-12 hover:text-indigo-500"
        to="/"
        ><svg
          class="h-8 w-8 text-indigo-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
          <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
          <polyline points="12 8 7 3 3 7 8 12" />
          <line x1="7" y1="8" x2="5.5" y2="9.5" />
          <polyline points="16 12 21 17 17 21 12 16" />
          <line x1="16" y1="17" x2="14.5" y2="18.5" /></svg
        ><span class="font-bold text-xl">Ormeneze</span></nuxt-link
      >
      <ul class="flex items-center px-10 space-x-2">
        <li v-for="(nav, index) in navs" :key="index">
          <nuxt-link
            class="font-pp hover:text-indigo-500 p-3 rounded-md text-gray-900 text-sm"
            :to="nav.link"
            >{{ nav.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="mr-16 flex justify-center items-center">
      <nuxt-link
        to="/orcamento"
        class="transition ease-in-out border border-gray-800 flex p-4 hover:bg-gray-800 hover:text-white text-sm text-black font-pp"
        >Orçamento</nuxt-link
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
