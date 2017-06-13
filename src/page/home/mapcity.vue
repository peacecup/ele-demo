<template>
	<div class="map_cities">
	    <div class="city_title">
	        <span>请选择你所在的城市</span>
	        <el-breadcrumb separator=">">
                <el-breadcrumb-item >选城市</el-breadcrumb-item>
                <el-breadcrumb-item>定位置</el-breadcrumb-item>
                <el-breadcrumb-item>叫卖外</el-breadcrumb-item>
            </el-breadcrumb>		
	    </div>
	    <div class="city_guess">
	        <p>猜你在</p>
	        <el-button type="danger" v-on:click='choosecity(null)'>{{guessCity.name}}</el-button>
	        <div class="city_search">
	        	<el-autocomplete popper-class="search_city" v-model="queryCity"  :fetch-suggestions="queryCityAsync" 
	        	custom-item="item" placeholder="请输入内容"   @select="handleSelect" ></el-autocomplete>
	        </div>	        	
	    </div>
	    <div class="city_list">
	        <ul>
	        	<li v-for="(value,key,index) in cityList" class="city_block">
	        	    <h4 class="city_letter">
	        	        {{key}}
                    </h4>
                     <ul class="cities">
                        <li  tag="li" v-for="item in value"  v-on:click="choosecity(item)" class="city">
                            {{item.name}}
                        </li>  
                    </ul>
	        	</li>
	        </ul>	
	    </div>
	</div>
</template>

<script>
import {getCityGroup} from '../../service/getData';
import Vue from 'vue';
Vue.component('item',{
    functional: true,
    render: function (h, ctx) {
        var item = ctx.props.item;
        return h('li', ctx.data, [
            h('div', { attrs: { class: 'name' } }, [item.name]),
            h('span', { attrs: { class: 'addr' } }, [item.abbr])
        ]);
    },
    props: {
        item: { type: Object, required: true }
    }
});
export default {
	data(){
		return {
			cityList: {},
			queryCity: ''
		}
	},
	props: ['guessCity'],
/*	components:{
		'item-with-spell':
	},*/
	methods:{
		choosecity(city){
			this.$emit('choosecity',city)
		},
		queryCityAsync(queryString,cb){
			var resultCities = null;
			let self = this;
			queryString = queryString?queryString.trim():queryString;
			function fuzzyQuery(queryString){
				let results = [];
                //只需要在这里调用的方法没必要放在更外面一层，不管多简单都要注意调用权限
                //过滤函数
				function createFilter(queryString){
					return (city) => {
                        return (city.name.indexOf(queryString) != -1);
                    };
				}
				for(let i = 65; i <= 90; i++){
					let letter = String.fromCharCode(i);
					let temp = self.cityList[letter];
					if(temp){
						results = results.concat(temp.filter(createFilter(queryString)));
					}
				}
				return results;
			}
			resultCities = queryString? fuzzyQuery(queryString) : [],
			cb(resultCities);
		},
		handleSelect(item) {
			this.$emit('choosecity',item);
        }
	},
	mounted(){
		getCityGroup().then( res => {
			let sortobj = {};
            for (let i = 65; i <= 90; i++) {
            	let letter = String.fromCharCode(i);
                if (res[letter]) {
                    sortobj[letter] = res[letter];
                }
            }
			this.cityList = sortobj;
		})
	}
}

</script>

<style lang="scss">
@import '../../style/home/mapcity.scss'
</style>