<template>
  <section class="app-body" :style="{height:`calc(100% - ${appBodyHeight}px)`}">
    <slot></slot>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      appBodyHeight: 'appBody/appBodyHeight'
    })
  }
}
</script>