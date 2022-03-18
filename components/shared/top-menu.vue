<template lang="html">
  <div
    class="fixed flex top-0 h-16 w-screen font-pp z-20 shadow justify-between bg-white"
  >
    <div class="flex">
      <nuxt-link
        class="transition ease-in-out text-gray-900 font-pp flex items-center space-x-2 px-12 hover:text-gg"
        to="/"
        ><span class="font-bold text-xl font-ail underline"
          >ORMENEZE</span
        ></nuxt-link
      >
      <ul class="flex items-center px-10 space-x-2">
        <li v-for="(nav, index) in navs" :key="index">
          <nuxt-link
            class="font-pp hover:text-gg p-3 rounded-md text-gray-900 text-sm"
            :to="nav.link"
            >{{ nav.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="mr-16 flex justify-center items-center">
      <nuxt-link
        to="/orcamento"
        class="transition ease-in-out border border-gg flex p-2 hover:bg-gg hover:text-white text-sm text-black font-pp"
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
