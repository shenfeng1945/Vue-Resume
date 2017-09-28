<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="登录">
      </div>
    </form>
  </div>
</template>
<script>
  import AV from '../lib/leancloud'
  import getAVUser from '../lib/getAVUser'
  export default {
    name:'signInForm',
    data(){
      return{
        formData:{username:'',password:''}
      }
    },
    methods:{
      signIn(){
        AV.User.logIn(this.formData.username,this.formData.password).then(()=> {
          this.$emit('success',getAVUser())
        }, function (error) {
        });
      }
    }
  }
</script>
