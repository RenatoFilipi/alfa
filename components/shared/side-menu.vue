<template lang="html">
  <div
    class="font-pp fixed top-0 left-0 h-screen bg-gray-50 w-52 flex-col shadow"
  >
    <nuxt-link
      class="text-gray-800 font-pp flex items-center space-x-2 px-4 my-6"
      to="/"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
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
      ><span class="font-bold text-xl">Interiores</span></nuxt-link
    >

    <nav class="px-4 mt-10 flex-col space-y-2">
      <nuxt-link
        class="flex items-center space-x-3 p-2 rounded text-gray-800 hover:bg-gray-200"
        to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="font-pp text-lg">Home</span></nuxt-link
      >
      <nuxt-link
        class="flex items-center space-x-3 p-2 rounded text-gray-800 hover:bg-gray-200"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          /></svg
        ><span class="font-pp text-lg">Sobre</span></nuxt-link
      >
      <nuxt-link
        class="flex items-center space-x-3 p-2 rounded text-gray-800 hover:bg-gray-200"
        to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span class="font-pp text-lg">Serviços</span></nuxt-link
      >
      <nuxt-link
        class="flex items-center space-x-3 p-2 rounded text-gray-800 hover:bg-gray-200"
        to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          /></svg
        ><span class="font-pp text-lg">Trabalhos</span>
      </nuxt-link>
      <nuxt-link
        class="flex items-center space-x-3 p-2 rounded text-gray-800 hover:bg-gray-200"
        to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          /></svg
        ><span class="font-pp text-lg">Contato</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SideMenu',
})
</script>
