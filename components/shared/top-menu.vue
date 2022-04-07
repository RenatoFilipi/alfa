<template lang="html">
  <nav
    class="w-full flex items-center justify-between flex-wrap bg-white px-6 py-3 fixed z-20 shadow-sm">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link
        class="transition ease-in-out text-gray-900 font-pp flex items-center space-x-2 lg:px-12 hover:text-gg"
        to="/">
        <span class="font-bold text-xl font-ail underline">ORMENEZE</span>
      </nuxt-link>
    </div>
    <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2" @click="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <nuxt-link
          v-for="(nav, index) in navs"
          :key="index"
          class="font-pp hover:text-gg p-3 rounded-md text-blacktext-sm"
          :to="nav.link">
          {{ nav.name }}
        </nuxt-link>
      </div>
      <div>
        <button
          type="button"
          class="transition ease-in-out border border-black flex justify-center items-center gap-2 p-4 hover:bg-gray-100 w-full"
          @click="$router.push('orcamento')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="text-sm font-medium text-black font-pp">Orçamento</span>
        </button>
      </div>
    </div>
  </nav>
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
      open: false,
    }
  },

  methods: {
    toggle() {
      this.open = !this.open
    },
  },
})
</script>
