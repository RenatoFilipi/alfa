<template lang="html">
  <section id="trabalhos" class="pt-28 pb-40 block">
    <div class="block w-full">
      <h3 class="text-center text-indigo-400 font-pp font-medium text-xl mb-2">
        TRABALHOS RECENTES
      </h3>
      <h1
        class="text-center font-pp text-5xl max-w-5xl mx-auto my-0 font-semibold leading-snug"
      >
        {{ title }}
      </h1>
      <!-- gallery of images -->
      <div v-if="isLoading" class="flex justify-center mt-36 m-auto">
        <svg
          role="status"
          class="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <div
        v-else
        class="flex justify-center my-20 max-w-6xl m-auto flex-wrap gap-8"
      >
        <nuxt-link
          v-for="(project, index) in projects"
          :key="index"
          :to="project.link"
          class="relative flex items-center justify-center m-3 overflow-hidden duration-500 transform ease-in-out w-96 h-3/4 rounded-md group"
        >
          <nuxt-img
            class="transform transition-all duration-500 ease-in-out hover:scale-110"
            :src="'/gallery/' + project.file"
            :alt="project.name"
          />
          <div
            class="h-20 font-pp opacity-0 group-hover:opacity-100 duration-500 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-center space-x-2 text-2xl py-6 bg-gradient-to-t from-black to-transparent text-white hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span class="">{{ project.name }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProject } from '~/interfaces/projects/IProjects'
const title =
  'Nós amamos oque fazemos, cheque alguns dos nossos trabalhos recentes'

export default Vue.extend({
  name: 'WorkSection',

  data() {
    return {
      title,
      projects: [] as IProject[],
      isLoading: true as Boolean,
    }
  },

  mounted() {
    this.fetchProjects()
  },

  methods: {
    async fetchProjects() {
      const response = await this.$axios.get('/api/projects')
      response.data.data.forEach((el: IProject) => {
        this.projects.push(el)
      })
      this.isLoading = false
    },
  },
})
</script>
