import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      selected:'profile',
      resume: {
        config: [
          {field: 'profile', icon: 'wo'},
          {field: 'education', icon: 'teach'},
          {field: 'skills', icon: 'tools'},
          {field: 'projects', icon: 'portfolio'},
          {field: 'contacts', icon: '3-copy'}
        ],
        profile: {name: '', title: ''},
        education: [
          {name: '', content: ''},
          {name: '', content: ''}
        ],
        skills: [
          {name: '', content: ''},
          {name: '', content: ''}
        ],
        projects: [
          {name: '', content: ''},
          {name: '', content: ''}
        ],
        contacts: {city: '', email: '', QQ: '', phone: ''}
      }
    },
  mutations:{
      switchTab(state,payload){
        state.selected = payload
        localStorage.setItem = ('state',JSON.stringify(state))
      }
  }
})
