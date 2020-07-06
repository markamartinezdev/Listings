<template>
  <div class="slider">
    <div class="slider--numbers">
      <span class="slider--number-min">{{value.min}}</span>
      <span class="slider--number-max">{{value.max}}</span>
    </div>

    <div class="slider--dials" :style="{width: `calc(100% - ${dialSize}px)`}">
      <div class="slider--line"></div>
      <div class="slider--dial" :style="{...this.minPosition, ...this.size}" @mousedown="triggerDial('min')" ></div>
      <div class="slider--dial" :style="{...this.maxPosition, ...this.size}" @mousedown="triggerDial('max')"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    range: {
      type: Object,
      default() {
        return {
          max: 100,
          min: 0
        }
      }
    },
    dialSize: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      value: {
        max: 100,
        min: 0
      },
      dialPositions: {
        min: 0,
        max: 100
      }
    }
  },
  computed: {
    size() {
      return{ width: this.dialSize+'px', height: this.dialSize+'px'}
    },
    minPosition() {
      console.log(`calc(${this.dialPositions.min}% - ${this.dialSize / 2})`)
      return { left: `calc(${this.dialPositions.min}% - ${this.dialSize / 2}px)`}
    },
    maxPosition() {
      return { left: `calc(${this.dialPositions.max}% - ${this.dialSize / 2}px)`}
    }
  },
  methods: {
    triggerDial(event) {
      console.log(event)
    },
  }
}
</script>