<template lang="html">
  <section id="sobre" class="pt-48 block">
    <div class="flex-col justify-center items-center w-full py-4 space-y-3">
      <h3 class="text-center text-indigo-400 font-pp font-medium text-xl mb-2">
        QUEM SOMOS
      </h3>
      <h1 class="font-pp text-7xl text-center">ORMENEZE</h1>
      <h3 class="text-center text-gray-500 flex-shrink mx-4">
        ARQUITETURA E INTERIORES
      </h3>
    </div>
    <div class="flex justify-center items-center pt-16">
      <div class="max-w-5xl">
        <p class="text-justify font-pp text-lg text-gray-500">
          {{ aboutText }}
        </p>
      </div>
    </div>
    <div
      class="relative flex justify-center items-center h-60 w-full bg-gray-100 mt-48 mb-12"
    >
      <ul class="h-full flex justify-center items-center space-x-40">
        <li
          v-for="achievement in achievements"
          :key="achievement.name"
          class="block font-pp"
        >
          <p class="text-center text-5xl mb-2 text-indigo-400">
            {{ achievement.number }}
          </p>
          <p class="text-center text-gray-500 text-xl">
            {{ achievement.name }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const aboutText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance.<br /><br />
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
          from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
          also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.`

const achievements = [
  { name: 'Copos de café', number: 1400 },
  { name: 'Projetos finalizados', number: 100 },
  { name: 'Clientes felizes', number: 97 },
]

export default Vue.extend({
  name: 'AboutSection',
  data() {
    return {
      aboutText,
      achievements,
    }
  },
})
</script>
