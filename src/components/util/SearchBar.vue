<template>
  <div class="search-bar">
    <div class="form is-flex">
      <div class="search-bar--item">
        <search-input :placeholder="'state/city/zip'" v-model="searchOptions.location"/>
      </div>

      <div class="search-bar--item">
        <ui-button class="button--alt" :text="'size'" @click="toggleActivePopoup('size')"/>
        <div class="search-bar--item-popout" :class="{active: activePopout == 'size'}">
          <icon class="search-bar--item-popout-close-icon" :icon="'close'" @click="toggleActivePopoup"/>
          <range-selector :title="'Square Feet'" v-model="searchOptions.sqft"/>
        </div>
      </div>

      <div class="search-bar--item">
        <ui-button class="button--alt" :text="'price'" @click="toggleActivePopoup('price')"/>
        <div class="search-bar--item-popout" :class="{active: activePopout == 'price'}">
          <icon class="search-bar--item-popout-close-icon" :icon="'close'" @click="toggleActivePopoup"/>
          <range-selector :title="'Price'" v-model="searchOptions.price" :type="'price'"/>
        </div>
      </div>

      <div class="search-bar--item">
        <ui-button class="button--alt" :text="'bed & bath'" @click="toggleActivePopoup('bed&bath')"/>
        <div class="search-bar--item-popout" :class="{active: activePopout == 'bed&bath'}">
          <icon class="search-bar--item-popout-close-icon" :icon="'close'" @click="toggleActivePopoup"/>
          <selector :title="'Bed(s)'" :items="bedNumber" v-model="searchOptions.minOfBeds"/>
          <selector :title="'Bath(s)'" :items="bedNumber" v-model="searchOptions.minOfBaths"/>
        </div>
      </div>

      <div class="search-bar--item">
        <ui-button :text="'save search'" @click="saveSearch"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { FormInput, SearchInput } from '@/components/util/form/'
import { UiButton, RangeSelector, Selector, Icon } from '@/components/util/ui'

export default {
  data() {
    return {
      activePopout: null,
      bedNumber: [
        {
          value: 0,
          text: 'any'
        },
        {
          value: 1,
          text: '1+'
        },
        {
          value: 2,
          text: '2+'
        },
        {
          value: 3,
          text: '3+'
        },
        {
          value: 4,
          text: '4+'
        },
      ],
      bathNumber: [
        {
          value: 0,
          text: 'any'
        },
        {
          value: 1,
          text: '1+'
        },
        {
          value: 2,
          text: '2+'
        },
        {
          value: 3,
          text: '3+'
        },
        {
          value: 4,
          text: '4+'
        },
      ],
      searchOptions: {
        sqft: {
          max: null,
          min: null
        },
        price: {
          max: null,
          min: null
        },
        minOfBeds: null,
        minOfBaths: null,
        location: null
      }
    }
  },
  computed:{
    ...mapGetters({
      getSavedSearches: 'user/getSavedSearches',
    }),
    searchQuery() {
      let query = ''
      Object.keys(this.searchValues).forEach( property => {
        if (this.searchValues[property]) {
          query = query + `&${property}=${this.searchValues[property]}`
        }
      })
      return query
    },
    searchValues() {
      let { minOfBeds, minOfBaths, sqft, price } = this.searchOptions
      return {
        min_beds: minOfBeds,
        min_baths: minOfBaths,
        price_max: price.max,
        price_min: price.min,
        sqft_min: sqft.min,
        sqft_max: sqft.max
      }
    }
  },
  methods: {
    ...mapActions({
      setQuery: 'search/setQuery',
      setSavedSearches: 'user/setSavedSearches'
    }),
    toggleActivePopoup(popout = null) {
      this.activePopout = popout
    },
    saveSearch() {
      if (this.searchQuery.length) {
        this.setSavedSearches(this.searchQuery)
      }
    }
  },
  components: {
    FormInput,
    UiButton,
    SearchInput,
    RangeSelector,
    Selector,
    Icon
  },
  watch:{
    searchQuery(value) {
      this.setQuery(value)
    }
  }
}
</script>
