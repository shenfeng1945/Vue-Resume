<template>
  <div class="page" :class="{previewMode:previewMode}">
    <header>
      <Topbar/>
    </header>
    <main class="main">
      <ResumeEditor/>
      <ResumePreview/>
    </main>
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
    }
  }
</script>
<style lang="scss">
  .page{
    display: flex;
    flex-direction: column;
    height:100vh;
    .previewMode{
      #topbar{display: none;}
      #resumeEditor{
        display: none;
      }
    }
  }
  .main{
   flex-grow:1;
    display: flex;
    padding:16px;
    background:#999;
  }
</style>
