<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
      <span class="close" @click="close"><svg class="icon-close"><use xlink:href="#icon-iconclose01"></use></svg></span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MyDialog',
    props:['title','visible'],
    methods:{
      close(){
        this.$emit('close')
      }
    }
  }
</script>
<style lang="scss">
  .icon-close{
    width:30px;
    height:30px;
    fill:green;
    vertical-align:middle;
  }
  .wrapper{
    position:fixed;
    background: hsla(0,0%,0%,.25);
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    justify-content:center;
    align-items:center;
    z-index:2;
  }
  .dialog{
    /*min-height: 4em;*/
    /*min-width: 10em;*/
    width:400px;
    > header{
      display: flex;
      justify-content: space-between;
      background-color: #f95252;
      border-radius: 20px 20px 0 0;
      color: #fff;
      font-size: 28px;
      padding: 20px 26px;
      >.close{
        cursor:pointer;
      }
    }
    > main{
      padding:20px 26px;
      background:white;
      border-radius:0 0 20px 20px;
    }
  }

</style>
