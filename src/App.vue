<template>
  <div id="app">
    <TopNav />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { TopNav } from './components/'

// Test data - only for dev
import { testUser } from '../testData'

export default {
    mounted() {
    this.setUserData(testUser)
  },
  methods:{
    ...mapActions({
      setUserData: 'user/setUserData'
    })
  },
  components: {
    TopNav,
  }
}
</script>

<style lang="scss">
@import '@/scss/app';
</style>
