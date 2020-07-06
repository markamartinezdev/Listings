<template>
  <app-body class="app-body--saved-searches">
    <div v-for="search in savedSearches" :key="search.id">
      {{search}}
    </div>
  </app-body>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { AppBody } from '@/components/util/ui/'

export default {
  computed: {
    ...mapGetters({
      savedSearches: 'user/getSavedSearches'
    })
  },
  components: {
    AppBody
}
}
</script>

<style>

</style>