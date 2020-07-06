<template>
  <div class="collapser" :class="{'collapser--closed': closed}">
    <slot></slot>
    <icon class="collapser--toggle" @click="toggleClosed"/>
  </div>
</template>

<script>
import { Icon } from '@/components/util/ui/'
export default {
  data() {
    return {
      closed: true,
    }
  },
  methods: {
    toggleClosed() {
      this.closed = !this.closed
    }
  },
  components: {
    Icon
  }
}
</script>

<style>

</style>