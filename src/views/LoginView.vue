<script setup>
  
</script>

<template>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'>
  <link rel="stylesheet" href="./src/assets/css/style.css">
  <div class="login-form">
      <center>
          <img width="200" height="200" src="../assets/img/R.png">  
      </center>
        <center>Risk Rank Login</center>
      <div class="content">
        <div class="input-field">
          <input v-model="businessId" type="text" placeholder="Business ID" autocomplete="nope">
        </div>
        <div class="input-field">
          <input v-model="password" type="password" placeholder="Password" autocomplete="new-password">
        </div>
        <a href="#" class="link">Forgot Your Password?</a>
      </div>
      <div class="action">
        <button>Register</button>
        <button @click="login" style="text-decoration: none; color: #fff;">Sign in</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      businessId: '',
      password: '',
    }
  },
  methods: {
    login(){
      if(this.businessId != '' && this.password != ''){
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped>

</style>
