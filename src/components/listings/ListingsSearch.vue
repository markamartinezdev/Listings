<template>
  <app-body class="app-body--listings">
    <search-bar ref="searchBar" @search="fetchListings"/>
    <div class="is-flex" :style="{height: `calc(100% - ${searchHeight}px)`}">
      <div class="listings">
        <div class="listings--header">
          <h1>{{title}}</h1>
          <span>{{numberOfListings}} listings</span>
        </div>
        <div v-if="loading" class="listings--loading">
          <icon/>
        </div>
        <div v-else class="listings--listings">
          <listing
            v-for="listing in listings"
            @mouseenter="mouseOverListing(listing)"
            @mouseleave="mouseLeftListing(listing)"
            :key="listing.id"
            :listing="listing"
          />
          <!-- add a pagination either at bottom of list or fixed at the top. maybe layzyload list? -->
        </div>
      </div>
      <listings-map class="map" :listings="listings" :center="mapCenter" @centerUpdated="updateCenter" :initZoom="13" :activePopup="activeListingPopup"/>
    </div>
  </app-body>
</template>

<script>
/*

  Make this component into a view that is shared by buy and rent urls instead of having a rent and buy view

*/

import { mapGetters, mapActions } from 'vuex'
import { AppBody, Icon } from '@/components/util/ui/'
import { SearchBar, Collapser } from '@/components/util/'
import { Listing, ListingsMap } from '@/components/listings/'

// Test data - only for dev
import { testListings } from '../../../testData/'

export default {
  data() {
    return {
      searchHeight: 0,
      activeListingPopup: null,
      searchCity: '',
      loading: true,
      mapCenter: {
          lat: 0,
          lng: 0
        }
    }
  },
  mounted() {
    this.initBodyHight()
    this.fetchListings()
  },
  computed: {
    ...mapGetters({
      listings: 'listings/listings',
      defaultSearchLocation: 'user/defaultSearchLocation',
      searchQuery: 'search/query'
    }),
    title() {
      return `Homes to ${this.$route.name} ${this.searchCity ? 'near ' + this.searchCity : ''}`
    },
    numberOfListings() {
      return this.listings.length
    }
  },
  methods: {
    ...mapActions({
      setListings: 'listings/setListings',
    }),
    initBodyHight() {
      window.addEventListener('resize', this.setSearchHeight)
      this.setSearchHeight()
    },
    setSearchHeight() {
      this.searchHeight = this.$refs.searchBar.$el.clientHeight
    },
    mouseOverListing(listing) {
      this.activeListingPopup = listing.mls
    },
    mouseLeftListing() {
      this.activeListingPopup = null
    },
    updateCenter(center) {
      if (center){
        this.mapCenter = center
      }
    },
    fetchListings() {
      this.loading = true

      // Clear listings
      this.setListings([])
      this.searchCity = ''

      // Test data will be replaced with ajax call once api is ready
      setTimeout(()=>{
        this.setListings(testListings.listings())
        this.searchCity = testListings.location.city
        this.mapCenter = testListings.location.latLng
        this.loading = false
      }, 500)

    }
  },
  destroyed() {
    window.removeEventListener('resize', this.setSearchHeight)
  },
  components: {
    AppBody,
    ListingsMap,
    SearchBar,
    Collapser,
    Listing,
    Icon
  }
}
</script>