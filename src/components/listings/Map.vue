<template>
  <div>
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>

      <l-marker :ref="listing.mls" v-for="listing in listings" :key="listing.id" :lat-lng="listing.location.latLang" >
        <l-popup >
          <listing :listing="listing"/>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { Listing } from '@/components/listings'

export default {
  props: {
    listings: {
      type: Array,
      default: []
    },
    initZoom: {
      type: Number,
      default: 15
    },
    activePopup: {
      type: Number,
      default: null
    },
    center: {
      type: Object,
      default() {
        return {
          lat: 0,
          lang: 0
        }
      }
    }
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      bounds: null
    };
  },
  mounted() {
    this.zoomUpdated(this.initZoom)
    this.centerUpdated(this.initCenter)
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      this.$emit('centerUpdated', center)
    },
    boundsUpdated (bounds) {
      this.bounds = bounds
    }
  },
  watch: {
    activePopup(value) {
      if (value) {
        this.$refs[value][0].mapObject.openPopup()
      }
      else {
        this.$refs.map.mapObject.closePopup()
      }
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Listing
  },
}
</script>
