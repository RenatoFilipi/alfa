<template lang="html">
  <div class="">
    <top-menu v-if="true" />
    <side-menu v-if="false" />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import SideMenu from '~/components/shared/side-menu.vue'
import TopMenu from '~/components/shared/top-menu.vue'
export default {
  components: { SideMenu, TopMenu },
}
</script>
