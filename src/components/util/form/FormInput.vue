<template>
  <div class="form--element">
    <label v-if="!labelDisabled" class="form--label">{{label}}</label>
    <div class="form--input-container">
      <input class="form--input" :value="value" :type="inputType" @input="updateValue" :placeholder="placeHolder"/>
      <span class="form--input-show-text" :class="{active : this.showText}" v-if="showToggle" @click="toggleShowText">show</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'label'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    placeHolder: {
      type: String,
      default: ''
    },
    showToggle: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      showText: false,
    }
  },
  computed: {
    inputType() {
      return this.showText ? 'text' : this.type
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    toggleShowText() {
      this.showText = !this.showText
    },
  },
}
</script>

<style lang="scss">
  .form-input {

  }
</style>