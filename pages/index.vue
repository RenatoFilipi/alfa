<template>
  <div>
    <hero-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/pages/main/hero-section.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeroSection,
  },
  layout: 'main-lay',
})
</script>
