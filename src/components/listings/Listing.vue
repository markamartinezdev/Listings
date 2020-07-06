<template>
  <div class="listing" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="listing--alert" v-if="listing.alert">{{listing.alert}}</div>
    <icon class="listing--favorite" :class="{active : isFavorite}" :icon="heartIcon" @click="toggleFavorite"/>
    <div class="listing--image"
      :style="{backgroundImage:`url(${listing.images[0]})`}"
      @click="goToListing">
    </div>
    <div class="listing--details" @click="goToListing">
      <div class="listing--price">${{price}}</div>
      <div class="listing--size">
        <span class="listing--size-item" v-if="listing.rooms">{{listing.rooms}} bed</span>
        <span class="listing--size-item" v-if="listing.baths">{{listing.baths}} bath</span>
        <span class="listing--size-item" v-if="listing.sqft">{{listing.sqft}} sqft</span>
      </div>
      <div class="listing--address">
        <span class="listing--address-house-number">{{houseNumber}}</span>
        <span class="listing--address-city-state-zip">{{cityAndState}}</span>
      </div>
      <div class="listing--type">{{listing.type}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Icon } from '@/components/util/ui/'

export default {
  props: {
    listing: {
      type: Object,
      default: () => {
        return {
          id: 0,
          mls: null,
          price: 0,
          rooms: null,
          baths: null,
          sqft: null,
          type: '',
          images: [],
          location: {
            address: '',
            city: '',
            state: '',
            zipCode: null,
            latLng: {
              lat: 0,
              lang: 0
            }
          }
        }
      }
    }
  },
  methods: {
    ...mapActions({
      setFavorites: 'user/setFavorites'
    }),
    toggleFavorite(){
      this.isFavorite ? this.removeFavorite() : this.addFavorite()
    },
    removeFavorite() {
      const favorites = this.favorites.filter(favorite => { return favorite !==this.listing.mls })
      this.setFavorites(favorites)
    },
    addFavorite() {
      this.favorites.push(this.listing.mls)
      this.setFavorites(this.favorites)
    },
    goToListing() {
      this.$router.push(`/listing/${this.listing.mls}`)
    },
    mouseEnter() {
      this.$emit('mouseenter')
    },
    mouseLeave() {
      this.$emit('mouseleave')
    },
  },
  computed:{
    ...mapGetters({
      favorites: 'user/favorites',
      userId: 'user/userId'
    }),
    price() {
      return this.listing.price.toLocaleString()
    },
    houseNumber() {
      return this.listing.location.address
    },
    cityAndState() {
      const { city, state, zipCode } = this.listing.location
      return `${city}, ${state} ${zipCode}`
    },
    isFavorite() {
      return this.favorites.indexOf(this.listing.mls) >= 0 ? true : false
    },
    heartIcon() {
      return this.isFavorite ? 'heart-filled' : 'heart'
    }
  },
  components: {
    Icon
  },
}
</script>
