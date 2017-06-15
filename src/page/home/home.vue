<template>
    <div class="home">
        <header class="home_header">
            <head-top></head-top>
        </header>
        <div class="home_breadcrumb">
            <bread-Crumb></bread-Crumb>
        </div>
        <div class="home_content">
        	<router-view></router-view> 
        </div>
        <div class="home_footer">
            <v-Footer></v-Footer>
        </div>   	
    </div>
</template>

<script>
import headTop from './head';
import breadCrumb from './breadCrumb';
import vFooter from './footer';
export default {
	data(){
		return {

		}
	},
	methods: {

	},
	computed: {
		address(){
			return this.$store.state.address;
		}
	},
	components: {
		headTop,
		breadCrumb,
		vFooter
	},
	mounted(){

	}
}
</script>

<style lang="scss">
@import '../../style/home/home.scss';
</style>