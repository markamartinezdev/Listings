<template>
  <div class="rendered-listings">
    <div class="rendered-listings--header">
      <h1>{{title}}</h1>
      <span>{{numberOfListings}} listings</span>
    </div>
    <div class="rendered-listings--listings">
      <listing
        v-for="listing in listings"
        @mouseenter="mouseEnter(listing)"
        @mouseleave="mouseLeave(listing)"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Listing from './Listing'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    listings: {
      type: Array,
      default: () => []
    }
  },
  computed:{
    numberOfListings() {
      return this.listings.length
    }
  },
  methods: {
    mouseEnter(listing) {
      this.$emit('mouse_over_listing', listing)
    },
    mouseLeave(listing) {
      this.$emit('mouse_left_listing', listing)
    }
  },
  components: {
    Listing
  }
}
</script>

<style lang="scss">
.rendered-listings {
  display: flex;
  flex-direction: column;
  width: 50%;
  &--listings {
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  &--header {
    padding: .5em 1em;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 20px;
    }
  }
}
</style>