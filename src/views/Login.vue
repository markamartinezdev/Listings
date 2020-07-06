<template>
  <app-body class="app-body--center login">
    <div class="dialog">
      <div class="dialog--header">
        <h1 class="dialog--header-text">Welcome</h1>
        <p class="dialog--header-sub-text">Sign in to search</p>
      </div>
      <div class="form">
        <form-input :type="'email'" :label="'email'" v-model="email"/>
        <form-input :type="'password'" :label="'password'" v-model="password" :showToggle="true"/>
        <ui-button class="button--submit" :text="'submit'" @click="login"/>
      </div>
    </div>
  </app-body>
</template>

<script>
import { mapAcitons, mapGetters, mapActions } from 'vuex'
import { FormInput } from '@/components/util/form/'
import { UiButton, AppBody } from '@/components/util/ui'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  mounted() {
    // Setting user authentication to false just for testing. this will be removed onec api is ready

  },
  methods: {
    ...mapActions({
      userAuthenticated: 'user/userAuthenticated'
    }),
    login() {
      // Redirecting to buy page for now, once api is ready will have ajax call
      this.userAuthenticated(true)
      this.$router.push('/buy')
    }
  },
  components: {
    FormInput,
    UiButton,
    AppBody
  }
}
</script>

<style lang="scss">
.login {
  .button {
    margin-top: 1em;
  }
  .form {
    max-width: 536px;
    margin: 0 auto;
  }
}
</style>