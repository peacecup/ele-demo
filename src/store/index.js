import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);
const state = {
	address: ''
}

export default new Vuex.Store({
	state,
	actions,
	mutations
});
