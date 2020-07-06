<template>
  <app-body class="listings">
    <search-bar ref="searchBar" />
    <div class="is-flex" :style="{height: `calc(100% - ${searchHeight}px)`}">
      <listings :listings="listings" :title="title" @mouse_over_listing="mouseOverListing" @mouse_left_listing="mouseLeftListing"/>
      <listings-map class="map" :listings="listings" :center="mapCenter" @centerUpdated="updateCenter" :initZoom="13" :activePopup="activeListingPopup"/>
    </div>
  </app-body>
</template>

<script>
/*

  Make this component into a view that is shared by buy and rent

*/

import { mapGetters, mapActions } from 'vuex'
import { AppBody } from '@/components/util/ui/'
import { SearchBar, Collapser } from '@/components/util/'
import { Listings, ListingsMap } from '@/components/listings/'

// Test data - only for dev
import { testListings } from '../../../testData/'

export default {
  data() {
    return {
      searchHeight: 0,
      activeListingPopup: null,
      searchCity: '',
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
      return`Homes to ${this.$route.name} near ${this.searchCity}`
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
      // Test data will be replaced with ajax call once api is ready
      this.setListings(testListings.listings)
      this.searchCity = testListings.location.city
      this.mapCenter = testListings.location.latLng
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.setSearchHeight)
  },
  components: {
    AppBody,
    Listings,
    ListingsMap,
    SearchBar,
    Collapser
  }
}
</script>