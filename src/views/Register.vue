<template>
  <div id="app">
<input type="Name" name="Name" v-model="Name" placeholder="Enter your Name"/>
<br>
<br>
<input type="Password" name="Password" v-model="Password" placeholder="***"/>
<br>
<button @click="register">Register</button>
    <router-view/>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data()
  {
    return{
Name:"Enter your name",
Password:"Enter a password"
  }
  },
  methods:{
     async register(){
      const response= await AuthenticationService.register({
         Name:this.Name,
         Password:this.Password
       })
       console.log(response.body)
       console.log("register method was called", this.Name,this.Password)
    
    }
  }
}
</script>

<style>

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>