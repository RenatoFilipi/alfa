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
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const titleText =
  'Nós amamos oque fazemos, cheque alguns dos nossos trabalhos recentes'

export default Vue.extend({
  name: 'WorkSection',
  data() {
    return {
      titleText,
    }
  },
})
</script>
