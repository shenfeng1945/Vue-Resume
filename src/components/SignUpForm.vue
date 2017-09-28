<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="注册">
      </div>
    </form>
  </div>
</template>
<script>
  import AV from '../lib/leancloud'
  import getAVUser from '../lib/getAVUser'
  export default {
    name:'signUpForm',
    data(){
      return{
        formData:{username:'',password:''}
      }
    },
    methods:{
      signUp(){
        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(this.formData.username);
        // 设置密码
        user.setPassword(this.formData.password);
        user.signUp().then(()=> {
          this.$emit('success',getAVUser())
        }, function (error) {
        });
      }
    }



  }
</script>
