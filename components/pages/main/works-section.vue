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
        <a
          v-for="(image, index) in images"
          :key="index"
          :href="image.link"
          class="relative flex items-center justify-center m-3 overflow-hidden duration-500 transform ease-in-out w-96 h-3/4 rounded-md"
        >
          <nuxt-img
            class="transform transition-all duration-500 ease-in-out hover:scale-110 hover:blur-sm"
            :src="'/gallery/' + image.file"
            :alt="image.name"
          />
        </a>
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
    name: 'project 1',
  },
  {
    link: '/',
    file: 'test2.jpg',
    name: 'project 2',
  },
  {
    link: '/',
    file: 'test3.jpg',
    name: 'project 3',
  },
  {
    link: '/',
    file: 'test4.jpg',
    name: 'project 4',
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
