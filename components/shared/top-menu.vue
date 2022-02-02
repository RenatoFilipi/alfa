<template lang="">
  <div class="fixed flex top-0 w-screen font-pp h-20 z-10 shadow bg-white">
    <nuxt-link
      class="transition ease-in-out text-gray-800 font-dm flex items-center space-x-2 px-12 hover:text-red-400"
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
    <nav class="flex items-center ml-20 space-x-2">
      <nuxt-link
        class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-600"
        to=""
        >Home</nuxt-link
      >
      <nuxt-link
        class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-600"
        to=""
        >Sobre</nuxt-link
      >
      <nuxt-link
        class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-600"
        to=""
        >Serviços</nuxt-link
      >
      <nuxt-link
        class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-600"
        to=""
        >Trabalhos</nuxt-link
      >
      <nuxt-link
        class="font-pp hover:bg-gray-100 p-3 rounded-md text-gray-800"
        to=""
        >Contato</nuxt-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
}
</script>
