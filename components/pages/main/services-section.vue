<template lang="html">
  <section id="servicos" class="pt-28 pb-40 block">
    <div class="block w-full">
      <h3 class="text-center text-indigo-400 font-pp font-medium text-xl mb-2">
        O QUE FAZEMOS
      </h3>
      <h1
        class="text-center font-pp text-5xl max-w-5xl mx-auto my-0 font-semibold leading-snug"
      >
        {{ titleText }}
      </h1>
      <div class="mt-28 flex justify-center">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-20"
        >
          <div
            v-for="service in services"
            :key="service.name"
            class="relative max-w-lg"
          >
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="service.icon"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ service.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500 font-pp">
              {{ service.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const titleText =
  'Nós temos tudo o que você precisa para tornar seu projeto uma realidade'

const services = [
  {
    name: 'Taxas de câmbio competitivas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    name: 'Sem taxas ocultas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    name: 'As transferências são instantâneas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
  },
  {
    name: 'Notificações móveis',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
]

export default Vue.extend({
  name: 'ServiceSection',
  data() {
    return {
      titleText,
      services,
    }
  },
})
</script>
