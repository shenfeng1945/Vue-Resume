import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user:{
      id:'',
      username:''
    },
    newUser: false,
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile', icon: 'wo',isAddOrRemove:false},
        {field: 'education', icon: 'teach',isAddOrRemove:false},
        {field: 'skills', icon: 'tools',isAddOrRemove:true},
        {field: 'projects', icon: 'portfolio',isAddOrRemove:true},
        {field: 'contacts', icon: '3-copy',isAddOrRemove:false},
        {field:'links',icon:'link-symbol',isAddOrRemove:false}
      ],
      profile: {'姓名': '刘智超', '应聘职位': '前端开发 Front-End Developer','个人头像':'https://ooo.0o0.ooo/2017/09/20/59c1bf7765d56.jpg','个人介绍':'热爱计算机科学和互联网技术，关注Web发展，对新技术充满激情，有较强的学习能力。性格乐观，能积极面对压力。我希望加入一个以技术为驱动，工作有挑战，使人有成就感的互联网公司。'},
      education: [
        {'毕业院校': '武汉轻工大学', '专业': '理学学士','时间段':'2011-2015'}
      ],
      skills: [
        {'技能类别': '静态页面制作技术', '技能列表': ['像素级还原设计稿，可以实现响应式以适应手机屏幕','CSS3动画、Flex布局、Grid布局、CSS2布局']},
        {'技能类别': '熟练掌握原生JavaScript', '技能列表': ['掌握原型、闭包、作用域链、面向对象、异步流程控制等概念','能够进行模块化编程，使用Gulp、RequireJS、Webpack等多种方式处理工作流','能够对复杂函数进行功能化封装，并编写类似jQuery常用的基本功能性插件','熟悉ES6部分新特性']},
        {'技能类别':'移动端页面','技能列表':['熟悉手机端页面的开发流程','能够使用动态REM适配所有的手机屏幕']},
        {'技能类别':'与后台配合开发','技能列表':['了解HTTP协议及浏览器渲染原理','了解前端安全、网站性能优化','熟悉AJAX、Promise、CORS、JSONP','能够使用Node.js搭建静态服务器进行基本后台开发']},
        {'技能类别':'其他','技能列表':['熟悉Npm、Git的基本使用','了解Less/Sass/PostCSS/Autoprefixer等CSS预处理和模块化工具','掌握基本的数据结构和算法']}
      ],
      projects: [
        {'项目名称': '海贼王人设页面', '项目描述': '这是一个简单的响应式页面,使用媒体查询、Flex布局、自制轮播组件完成的','项目使用技术或功能':['技术栈：懒加载 + 预加载 + 自动加载'],'项目源码':'https://shenfeng1945.github.io/viewport','项目预览':'https://www.github.com/shenfeng1945/viewport'},
        {'项目名称': '英雄联盟仿站', '项目描述': '这是一个PC端的静态网页，像素级还原英雄联盟官网','项目使用技术或功能':['技术栈:jQuery + ES6 + CSS3','该项目目的在于能够精确还原原稿的每一个细节，提升自己的css/html水平'],'项目源码':'https://shenfeng1945.github.io/viewport','项目预览':'https://www.github.com/shenfeng1945/viewport'},
        {'项目名称': '在线Canvas画板', '项目描述': '这是一个PC端的在线画板，能在上面画东西','项目使用技术或功能':['功能: 调色且颜色可自定义、添加图形、改变画笔粗细、橡皮擦、图片导出下载和预览','实现: 使用jQuer、yCanvas API和双向绑定实现一个多功能的PC端在线画板'],'项目源码':'https://shenfeng1945.github.io/viewport','项目预览':'https://www.github.com/shenfeng1945/viewport'},
        {'项目名称': '移动端网易云音乐', '项目描述': '这是一个网易云音乐手机端播放页面应用。能够实现曲库列表实时更新、搜索数据请求、歌曲播放、暂停、重新播放等效果','项目使用技术或功能':['功能: 歌曲播放、歌单实时更新、曲库搜索、歌词滚动','部署：LeanCloud + 七牛云'],'项目源码':'https://shenfeng1945.github.io/viewport','项目预览':'https://shenfeng1945.github.io/viewport'},
        {'项目名称': 'Vue在线简历编辑器', '项目描述': '使用Vue框架做的一个编辑器','项目使用技术或功能':['技术栈：Vue + ES6 + LeanCloud后端服务','使用Vue来构建整个页面；使用LeanCloud云服务来提供后端支持'],'项目源码':'xxxxxxx','项目预览':'yyyyyyyyy'}
      ],
      contacts: {city: '深圳，广东', email: 'liuzhichao1993@foxmail.com', QQ: '823902826', phone: '123456789',blog:'https://shenfeng1945.github.io',github:'https:www.github.com/shenfeng1945'},
      links:{'技术博客':'https://shenfeng1945.github.io','GitHub':'https:www.github.com/shenfeng1945'}
    },
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state,{path,value}) {
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state',JSON.stringify(state))
    },
    initResume(state,payload){
      Object.assign(state,payload)
    },
    addTerm(state,{field,subitem}){
      let obj = {}
      for(var key in subitem){
        if(typeof subitem[key] === 'object'){
          obj[key] = ['']
        }else{
          obj[key] = ''
        }
      }
      state.resume[field].push(obj)
    },
    removeTerm(state,field){
      state.resume[field].pop()
    },
    addRow(state,{field,key,index}){
      state.resume[field][index][key].push('')
    },
    removeRow(state,{field,key,index}){
      state.resume[field][index][key].splice(index,1)
    },
    removeUser(state){
      state.user.id = ''
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    newUser(state){
      state.newUser = true
    }

  }
})
