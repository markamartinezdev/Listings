<template>
  <span class="icon" :class="'icon--' + icon" @click="click"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'spinner'
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
