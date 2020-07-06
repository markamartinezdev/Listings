<template>
  <app-body class="app-body--scroll">
    <div class="header">
      <ui-button class="button--back" @click="backToListings" :text="'back to search'"/>
    </div>
    <div class="listing">
    </div>
  </app-body>
</template>

<script>
import { AppBody, UiButton } from '@/components/util/ui'

export default {
  methods: {
    backToListings() {
      this.$router.go(-1)
    }
  },
  components: {
    AppBody,
    UiButton,
  }
}
</script>