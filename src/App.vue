<template>
  <div class="page" :class="{previewMode:previewMode}">
    <header>
      <Topbar @preview="preview"/>
    </header>
    <main class="main">
      <ResumeEditor/>
      <ResumePreview/>
    </main>
    <div class="save-exit">
      <el-button class="exitPreview btn" @click="exit">返回</el-button>
      <el-button type="primary" class="exitPreview btn" @click="print">保存</el-button>
    </div>
  </div>
</template>
<script>
 import Topbar from './components/Topbar'
 import ResumeEditor from './components/ResumeEditor'
 import ResumePreview from './components/ResumePreview'
 import store from './store/index'
 import getAVUser from './lib/getAVUser'
  export default {
    name: 'app',
    store,
    data(){
      return {previewMode: false}
    },
    components: {Topbar,ResumeEditor,ResumePreview},
    created(){
      let state = localStorage.getItem('state')
      if(state){state=JSON.parse(state)}
      this.$store.commit('initResume',state)
      this.$store.commit('setUser',getAVUser())
    },
    methods:{
      preview(){
        this.previewMode = true
      },
      exit(){
        this.previewMode = false
      },
      print(){
        setTimeout(function(){window.print()},500)
      },

    }
  }
</script>
<style lang="scss">
  .page.previewMode{
    #topbar{
      display: none;
    }
    #resumeEditor{
      display: none;
    }
    #resumePreview{
      border:none;
      max-width:980px;
      margin:0 auto;
      overflow: visible;
      height:100%;
      box-shadow: 0 0 5px rbga(0,0,0,.2);
    }
    .main{
      background:white;
    }
    .save-exit{
      position:fixed;
      display: flex;
      flex-direction:column;
      right:48px;
      top:24px;
      align-items:center;
      justify-content: center;
      >.btn{margin-left:0;margin-top:10px;}
    }
  }
  .page{
    display: flex;
    flex-direction: column;
    height:100vh;
    .save-exit{
      display: none;
    }
  }
  .main{
   flex-grow:1;
    display: flex;
    padding:16px;
    background:#999;
  }
  @media print{
    .save-exit{
      display: none !important;
    }
  }
</style>
