<template>
  <div class="top-nav">
    <div class="top-nav--logo">
      <router-link to="/">
      <img class="logo" src="@/assets/logo.svg" @load="setNavHeight"/>
      </router-link>
    </div>

    <div class="top-nav--type-links" v-if="userAuthenticated">
      <router-link class="top-nav--link" to="/buy">Buy</router-link> |
      <router-link class="top-nav--link" to="/rent">Rent</router-link>
    </div>

    <div class="top-nav--links" v-if="userAuthenticated">
      <router-link class="top-nav--link" to="/saved_searches">Saved Searches</router-link> |
      <router-link class="top-nav--link" to="/favorites">Favorites</router-link> |
      <a class="top-nav--link">Sign out</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  destroyed() {
    window.removeEventListener('resize', this.setNavHeight)
  },
  computed: {
    ...mapGetters({
      userAuthenticated: 'user/userAuthenticated'
    })
  },
  methods: {
    ...mapActions({
      setAppBodyHeight: 'appBody/setAppBodyHeight'
    }),
    initBodyHeight() {
      window.addEventListener('resize', this.setNavHeight)
      this.setNavHeight()
    },
    setNavHeight() {
      this.setAppBodyHeight(this.$el.clientHeight)
    },
  },
}
</script>