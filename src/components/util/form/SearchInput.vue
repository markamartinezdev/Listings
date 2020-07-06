<template>
  <div class="form--input-container">
    <input class="form--input form--input-search" :value="value" type="text" @input="updateValue" :placeholder="placeholder"/>
    <icon class="form--input-search-icon" :icon="'search'" @click="search"/>
  </div>
</template>

<script>
import { Icon } from '@/components/util/ui/'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    search() {
      this.$emit('search')
    }
  },
  components: {
    Icon
  },
}
</script>
