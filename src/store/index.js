import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import getAVUser from "../lib/getAVUser";

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
        {field: 'profile', icon: 'wo',isAddOrRemove:false,head:'个人信息'},
        {field: 'education', icon: 'teach',isAddOrRemove:false,head:'教育经历'},
        {field: 'skills', icon: 'tools',isAddOrRemove:true,head:'技能'},
        {field: 'projects', icon: 'portfolio',isAddOrRemove:true,head:'项目经历'},
        {field: 'contacts', icon: '3-copy',isAddOrRemove:false,head:'联系方式'},
        {field:'links',icon:'link-symbol',isAddOrRemove:false,head:'更多链接'}
      ],
      profile: {'姓名': '', '应聘职位': '','个人头像(链接)':'','个人介绍':''},
      education: [
        {'毕业院校': '', '专业': '','时间段':''}
      ],
      skills: [
        {'技能类别': '', '技能列表': ['']}
      ],
      projects: [
        {'项目名称': '', '项目描述': '','项目使用技术或功能':[''],'项目源码':'','项目预览':''},
      ],
      contacts: {city: '', email: '', QQ: '', phone: ''},
      links:{'技术博客':'','GitHub':''}
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
    }
  }

})
