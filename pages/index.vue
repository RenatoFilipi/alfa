<template lang="html">
  <div>
    <hero-section />
    <about-section />
    <services-section />
    <work-section />
    <contact-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/pages/main/hero-section.vue'
import AboutSection from '~/components/pages/main/about-section.vue'
import ServicesSection from '~/components/pages/main/services-section.vue'
import WorkSection from '~/components/pages/main/works-section.vue'
import ContactSection from '~/components/pages/main/contact-section.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeroSection,
    AboutSection,
    ServicesSection,
    WorkSection,
    ContactSection,
  },
  layout: 'main-lay',
})
</script>
