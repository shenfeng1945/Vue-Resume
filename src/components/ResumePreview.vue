<template>
  <div id="resumePreview">
    {{resume.skills}}
  </div>
</template>
<script>
  export default {
    computed:{
      resume(){
        return this.$store.state.resume
      }
    }
  }
</script>
<style>
  #resumePreview{
    border: 1px solid;
    flex:1;
    margin-left:8px;
    background:white;
    border-radius:5px;
  }
</style>
