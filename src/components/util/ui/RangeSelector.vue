<template>
  <div class="range-selector">
    <h1 class="range-selector--label">{{title}}</h1>

    <div class="range-selector--inputs">
      <input class="form--input range-selector--input"
        placeHolder="no min"
        :value="min"
        type="number"
        @input="event => Min = event.target.value"
      />

      <span class="range-selector--divider"></span>

      <input class="form--input range-selector--input"
        placeholder="no max"
        :value="max"
        type="number"
        @input="event => Max = event.target.value"
      />
    </div>
  </div>
</template>

<script>
// Todo - format number
// Maybe dont use input as element to display number?

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    type: {
      type: String,
      default: 'number'
    }
  },
  data() {
    return {
      Min: null,
      Max: null
    }
  },
  computed: {
    range() {
      return {min: this.Min, max: this.Max}
    }
  },
  watch:{
    range(value) {
      this.$emit('input', value)
    }
  },
}
</script>