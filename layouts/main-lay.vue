<template lang="html">
  <div class="">
    <top-menu v-if="true" />
    <div>
      <Nuxt />
    </div>
    <footer-menu />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TopMenu from '~/components/shared/top-menu.vue'
import FooterMenu from '~/components/shared/footer-menu.vue'

export default Vue.extend({
  components: { TopMenu, FooterMenu },
})
</script>
