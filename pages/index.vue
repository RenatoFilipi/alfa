<template>
  <div>
    <hero-section />
    <about-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/pages/main/hero-section.vue'
import AboutSection from '~/components/pages/main/about-section.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeroSection,
    AboutSection,
  },
  layout: 'main-lay',
})
</script>
