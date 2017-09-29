<template>
  <div id="topbar">
    <div class="topbar-wrapper">
      <h2 class="logo">Resume</h2>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好,{{user.username}}</span>
          <el-button @click="signOut">登出</el-button>
        </div>
        <div v-else class="userActions">
          <el-button type="primary" @click="signUpDialogVisible=true">注册</el-button>
          <el-button @click="signInDialogVisible=true">登录</el-button>
        </div>
        <el-button class="preview" @click="preview">预览</el-button>
        <i>
          <svg class="icon-link">
            <use xlink:href="#icon-icongithub"></use>
          </svg>
        </i>
      </div>
    </div>
    <MyDialog :visible="signUpDialogVisible" @close="signUpDialogVisible = false" title="Sign Up">
      <SignUpForm @success="logup($event)"/>
    </MyDialog>
    <MyDialog :visible="signInDialogVisible" @close="signInDialogVisible = false" title="Sign In">
      <SignInForm @success="login($event)"/>
    </MyDialog>
  </div>
</template>
<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from '../lib/leancloud'
  export default {
    data() {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false,
      }
    },
    components: {MyDialog, SignUpForm, SignInForm},
    computed:{
      logined(){
        return this.$store.state.user.id
      },
      user(){
        return this.$store.state.user
      }
    },
    methods:{
      signOut(){
        AV.User.logOut()
        this.$store.commit('removeUser')
      },
      login(user){
        this.signUpDialogVisible=false
        this.signInDialogVisible=false
        this.$store.commit('setUser',user)
      },
      preview(){
        this.$emit('preview')
      },
      logup(user){
        this.signUpDialogVisible=false
        this.signInDialogVisible=false
        this.$store.commit('setUser',user)
        this.$store.commit('newUser',user)
      }
    }
  }
</script>

<style lang="scss">
  #topbar {

    > .topbar-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid;
      height: 100px;
      > .logo {
        font-size: 35px;
        margin-left: 2em;
        color:#33cc77;
      }
      > .actions {
        margin-right: 2em;
        display: flex;
        .welcome{
          font-size:18px;
          margin-right:20px;
        }
        .preview{
          margin-left:10px;
        }
        .icon-link {
          width: 30px;
          height: 30px;
          vertical-align: middle;
          margin-left: 1em;
        }
      }
    }

  }
</style>
