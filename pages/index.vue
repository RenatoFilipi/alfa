<template>
  <div>
    <hero-section />
    <about-section />
    <services-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/pages/main/hero-section.vue'
import AboutSection from '~/components/pages/main/about-section.vue'
import ServicesSection from '~/components/pages/main/services-section.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeroSection,
    AboutSection,
    ServicesSection,
  },
  layout: 'main-lay',
})
</script>
