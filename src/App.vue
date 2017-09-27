<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
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
  export default {
    name: 'app',
    store,
    components: {Topbar,ResumeEditor,ResumePreview}
  }
</script>
<style>
  .page{
    display: flex;
    flex-direction: column;
    height:100vh;
  }
  main{
   flex-grow:1;
    display: flex;
    padding:16px;
    background:#999;
  }
</style>
