<template>
  <div class="login">
    <label for="email">Email</label>
    <input ref="email" type="text" name="email" required>

    <label for="password">Password</label>
    <input ref="password" type="password" name="password" required>

    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    login: function(){
      let email = this.$refs.email.value
      let password = this.$refs.password.value
      this.$store.dispatch('login', {email, password})
    }
  }
}
</script>

<style lang="scss">
  .login {
    display: flex;
    flex-direction: column;
  }
</style>
