import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      { icon: "dashboard", text: "Dashboard", routeName: "dashboard" },
      { icon: "folder", text: "My Projects", routeName: "projects" },
      { icon: "person", text: "Team", routeName: "team" }
    ],
    projects: [
      { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    ],
    teams: [
      { name: 'The Net Ninja', role: 'Web developer', avatar: '/img/avatar-1.png' },
      { name: 'Ryu', role: 'Graphic designer', avatar: '/img/avatar-2.png' },
      { name: 'Chun Li', role: 'Web developer', avatar: '/img/avatar-3.png' },
      { name: 'Gouken', role: 'Social media maverick', avatar: '/img/avatar-4.png' },
      { name: 'Yoshi', role: 'Sales guru', avatar: '/img/avatar-5.png' }
    ]
  },
  getters: {
    getDrawer(state) {
      return state.drawer
    },
    getItems(state) {
      return state.items
    },
    getProjects(state) {
      return state.projects
    },
    getTeams(state) {
      return state.teams
    }
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      console.log(state.drawer)
      state.drawer = !state.drawer;
      console.log(state.drawer)

    }
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('TOGGLE_DRAWER')
    },
    sortByProject({ state, commit }) {
      state.projects.sort((a, b) => {
        return a.title > b.title ? 1 : -1
      })
    },
    sortByPerson({ state, commit }) {
      state.projects.sort((a, b) => {
        return a.person > b.person ? 1 : -1
      })
    }
  },

})
