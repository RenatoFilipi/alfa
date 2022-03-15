<template lang="html">
  <footer
    class="shadow flex items-center justify-between p-8 bg-gray-800"
  >
  <div class="flex gap-16">
    <span class="text-sm text-gray-400 font-pp font-light"
      >© 2022 <nuxt-link to="/" class="hover:underline">Ormeneze</nuxt-link>.
      Todos direitos reservados.
    </span>
    <div class="flex gap-1">
      <span class="text-sm text-gray-400 font-pp font-light">Feito com</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-sm text-red-600 font-pp font-light" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
    <span class="text-sm text-gray-400 font-pp font-light">por <a href="https://www.linkedin.com/in/renato-filipi-silva-rosa-61277b138/" class="hover:underline" target=”_blank” rel=”noopener>Renato Filipi.</a></span></div>

  </div>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li v-for="(nav, index) in navs" :key="index">
          <nuxt-link :to="nav.link" class="mr-4 hover:underline md:mr-6 font-pp font-light"
            ><span>{{ nav.name }}</span></nuxt-link
          >
        </li>
      </li>
    </ul>
  </footer>
</template>

<script>
import Vue from 'vue'
const navs = [
  { name: 'Home', link: '#inicio' },
  { name: 'Sobre', link: '#sobre' },
  { name: 'Serviços', link: '#servicos' },
  { name: 'Trabalhos', link: '#trabalhos' },
  { name: 'Contato', link: '#contato' },
]

export default Vue.extend({
  name: 'FooterMenu',
  data() {
    return {
      navs,
    }
  },
})
</script>
