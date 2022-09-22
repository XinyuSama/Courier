import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		wxphone:""
	},
    mutations: {
		chnagewxphone(state,playload){
			state.wxphone=playload.wxphone
		}
	},
    actions: {}
})
export default store