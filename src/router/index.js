import Vue from 'vue'
import VueRouter from 'vue-router'

import {
	routerMode
} from '../config/env.js'


Vue.use(VueRouter);
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');


export default new VueRouter({
	routes: [
	    {
            path : '/',
            component: home,
        },
	],
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'

})