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
<style lang="scss">
  form{
    >.row{
      >label{display:block;color:#777;margin-bottom:10px;font-size:16px;}
      >input{
        display:block;
        margin-bottom:10px;
        background-color: #eee;
        color: #777;
        padding: 4px 10px;
        width: 348px;
        height:32px;
        border:none;
        -webkit-appearance: none;
        border-radius:3px;
      }
    }
    >.actions{
      >input[type="submit"]{
        background-color: #33cc77;
        color: #fff;
        display: block;
        margin: 0 auto;
        padding: 4px 0;
        width: 100px;
        border:none;
        -webkit-appearance: none;
        border-radius:3px;
        font-size:16px;
        height:32px;
      }
      >input[type="submit"]:hover{
        background-color: #28ad63;
      }
    }
  }

</style>
