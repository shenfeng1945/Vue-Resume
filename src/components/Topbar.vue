<template>
  <div id="topbar">
    <div class="topbar-wrapper">
      <h3 class="logo">
        <svg class="logo-icon"><use xlink:href="#icon-jianliguanli"></use></svg>
        在线简历编辑器</h3>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好, {{user.username}}</span>
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
  import getAVUser from "../lib/getAVUser";
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
        this.saveOrUpdateResume()
        AV.User.logOut()
        this.$store.commit('removeUser')
        localStorage.setItem('state','')
      },
      login(user){
        this.signUpDialogVisible=false
        this.signInDialogVisible=false
        this.$store.commit('setUser',user)
        this.fetchResume()
      },
      preview(){
        this.$emit('preview')
      },
      logup(user){
        this.signUpDialogVisible=false
        this.signInDialogVisible=false
        this.$store.commit('setUser',user)
        this.saveOrUpdateResume()
//        this.fetchResume()
      },
      saveOrUpdateResume(){
        if(this.$store.state.resume.id){
          this.updateResume()
          console.log('更新')
        }else{
          this.saveResume()
          console.log('新建')
        }
      },
      saveResume(){
        let dataString = JSON.stringify(this.$store.state.resume)
        let ResumeObject = AV.Object.extend('ResumeData')
        let resumeData = new ResumeObject()
        resumeData.set('content',dataString)
        //把用户的id与简历的id建立关联
        resumeData.set('userId',getAVUser().id)
        resumeData.save().then((resume)=>{
          this.$store.state.resume.id = resume.id
        })
      },
      updateResume() {
        //用来上传到服务器上
        console.log(this.$store.state.resume)
        let dataString = JSON.stringify(this.$store.state.resume)
        let avResume = AV.Object.createWithoutData('ResumeData', this.$store.state.resume.id)
        avResume.set('content', dataString)
        avResume.save().then(function(){
          //刷新得异步，在未更新之前就刷新了，数据都没了
          window.location.reload()
        })
      },
      fetchResume() {
        if (this.$store.state.user) {
          var query = new AV.Query('ResumeData')
          query.find()
            .then((resume) => {
              for(var i=0;i<resume.length;i++){
                let localId=getAVUser().id
                let userId = resume[i].attributes.userId
                if(localId===userId){
                  console.log('in')
                  let avResume = resume[i]
                  let id = avResume.id
                  this.$store.state.resume = JSON.parse(avResume.attributes.content)
                  this.$store.state.resume.id = id
                }
              }
            }, function(error) {
              console.error(error)
            })
        }
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
        font-size: 30px;
        margin-left: 2em;
        color:#33cc77;
        .logo-icon{
          width:32px;
          height:32px;
          vertical-align:middle;
          fill:#33cc77;
        }
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
          cursor:pointer;
        }
      }
    }

  }
</style>
