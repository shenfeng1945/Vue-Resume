<template>
  <div id="topbar">
    <h2 class="logo">Resume</h2>
    <div class="actions">
      <el-button type="primary">注册</el-button>
      <el-button>登录</el-button>
      <el-button>预览</el-button>
      <i><svg class="icon"><use xlink:href="#icon-icongithub"></use></svg></i>
    </div>
  </div>
</template>
<style lang="scss">
  .icon{
    width:30px;
    height:30px;
    vertical-align:middle;
  }
  #topbar{
    display: flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid;
    height:100px;
    > .logo{
      font-size:25px;
      margin-left:2em;
    }
    > .actions{
      margin-right:4em;
    }
  }
</style>
