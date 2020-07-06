<template>
  <section class="app-body app-body--center update-password">
    <div class="dialog">
      <div class="dialog--header">
        <h1 class="dialog--header-text">Oh, hi!</h1>
        <p class="dialog--header-sub-text">lets set up your new password</p>
      </div>
      <div class="form">
        <form-input :type="'password'" :label="'current password'" v-model="currentPassword" :showToggle="true"/>
        <form-input :type="'password'" :label="'new password'" v-model="newPassword" :showToggle="true"/>
        <form-input :type="'password'" :label="'confirm password'" v-model="newPasswordConfirm" :showToggle="true"/>
        <ui-button class="button--submit" :text="'submit'" @click="updatePassword"/>
      </div>
    </div>
  </section>
</template>

<script>
import { FormInput } from '@/components/util/form/'
import { UiButton } from '@/components/util/ui'

export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      formIsValid: false,
    }
  },
  methods: {
    updatePassword() {
      // Redirecting to buy page for now, once api is ready will have ajax call
      this.$router.push('/buy')
    }
  },
  components: {
    FormInput,
    UiButton
  }
}
</script>

<style lang="scss">
.update-password {
  .button {
    margin-top: 1em;
  }
  .form {
    max-width: 536px;
    margin: 0 auto;
  }
}
</style>