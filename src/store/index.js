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
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile', icon: 'wo',isAddOrRemove:false},
        {field: 'education', icon: 'teach',isAddOrRemove:false},
        {field: 'skills', icon: 'tools',isAddOrRemove:true},
        {field: 'projects', icon: 'portfolio',isAddOrRemove:true},
        {field: 'contacts', icon: '3-copy',isAddOrRemove:false}
      ],
      profile: {'姓名': '', '应聘职位': '','个人头像':'','个人介绍':''},
      education: [
        {'毕业院校': '1', 专业: '1','时间段':'1'}
      ],
      skills: [
        {'技能类别': '技能', '技能列表': ['']}
      ],
      projects: [
        {'项目名称': '项目', '项目描述': '','项目功能或链接地址':['']}
      ],
      contacts: {city: '', email: '', QQ: '', phone: '',blog:'',github:''}
    }
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
