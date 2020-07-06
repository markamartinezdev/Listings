<template>
  <button class="button" @click="click">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>