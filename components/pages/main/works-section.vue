<template lang="html">
  <section id="trabalhos" class="pt-28 pb-40 block">
    <div class="block w-full">
      <h3 class="text-center text-indigo-400 font-pp font-medium text-xl mb-2">
        TRABALHOS RECENTES
      </h3>
      <h1
        class="text-center font-pp text-5xl max-w-5xl mx-auto my-0 font-semibold leading-snug"
      >
        {{ titleText }}
      </h1>
      <!-- gallery of images -->
      <div class="flex justify-center my-20 max-w-6xl m-auto flex-wrap gap-8">
        <nuxt-link
          v-for="(image, index) in images"
          :key="index"
          :to="image.link"
          class="relative flex items-center justify-center m-3 overflow-hidden duration-500 transform ease-in-out w-96 h-3/4 rounded-md group"
        >
          <nuxt-img
            class="transform transition-all duration-500 ease-in-out hover:scale-110"
            :src="'/gallery/' + image.file"
            :alt="image.name"
          />
          <div
            class="font-pp opacity-0 group-hover:opacity-75 duration-500 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end text-xl py-4 bg-gradient-to-t from-black to-transparent text-white"
          >
            {{ image.name }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const titleText =
  'Nós amamos oque fazemos, cheque alguns dos nossos trabalhos recentes'
const images: Array<any> = [
  {
    link: '/',
    file: 'test1.jpg',
    name: 'projeto 1',
  },
  {
    link: '/',
    file: 'test2.jpg',
    name: 'projeto 2',
  },
  {
    link: '/',
    file: 'test3.jpg',
    name: 'projeto 3',
  },
  {
    link: '/',
    file: 'test4.jpg',
    name: 'projeto 4',
  },
]

export default Vue.extend({
  name: 'WorkSection',
  data() {
    return {
      titleText,
      images,
    }
  },
})
</script>
