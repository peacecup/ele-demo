import Vue from 'vue'
import VueRouter from 'vue-router'

import {
	routerMode
} from '../config/env.js'


Vue.use(VueRouter);
const address = r => require.ensure([], () => r(require('../page/address/address.vue')), 'address');
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');


export default new VueRouter({
	routes: [
	    {
            path : '/',
            component: address,
        },{
        	path : '/home',
        	component: home,
        	children: [
        	    {
        	    	path:''
        	    }
        	]
        }
	],
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'

})