<template>
  <div>
    <side-menu />
    <div class="ml-16">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import SideMenu from '~/components/shared/side-menu.vue'
export default {
  components: { SideMenu },
}
</script>
