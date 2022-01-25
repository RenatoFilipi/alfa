<template>
  <div>
    <side-menu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import SideMenu from '~/components/shared/side-menu.vue'
export default {
  components: { SideMenu },
}
</script>
