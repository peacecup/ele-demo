<template>
    <div class="catagery">
        <div class="fri_catagery">
        	<span>商家分类:</span>
    	    <div class="catagery_list">
    	        <span v-for="catagery in catageryList" ref="catagery.id" @click="fri_catageryClick(catagery)" 
    	            :class="{fri_active:fri_activeItem == catagery.id}">
    	            {{catagery.name}}
    	        </span>
    	    </div>
        </div>
    	<div class="sec_catagery" v-if="sec_catageries">	
    	    <span v-for="catagery in sec_catageries" ref="catagery.id" @click="sec_catageryClick(catagery)"
    	     :class="{sec_active:sec_activeItem == catagery.id}">{{catagery.name}}</span>
    	</div>
    </div>
</template>

<script>
import { getCatagery } from '../../service/getData'
export default {
	data(){
		return {
			//商家分类列表数据
			catageryList:[],
			//商品分类的二级分类数据
			sec_catageries: [],
			//当前选中的分类列表名称
			fri_activeItem: undefined,
			sec_activeItem: undefined
		}
	},
	props:{
		bus: { type: Object, required: true }
	},
	computed:{

	},
	methods:{
		fri_catageryClick(catagery){
			//由于数据里二级菜单默认的id是一级父菜单的id，所以这里，两个切换选中class的变量都为一级id
			this.fri_activeItem = catagery.id;
			this.sec_activeItem = catagery.id;	
			this.sec_catageries = catagery.sub_categories;
			this.bus.$emit('catageryChange',this.fri_activeItem,this.sec_activeItem)
		},
		sec_catageryClick(catagery){
			this.sec_activeItem = catagery.id;
			this.bus.$emit('catageryChange',this.fri_activeItem,this.sec_activeItem)
		}
	},
	components:{

	},
	mounted(){ 
		//根据地质的经纬度获取分类
		let address = JSON.parse(localStorage.getItem('address'));
		getCatagery(address.latitude,address.longitude).then( (res) =>{
			this.catageryList = res;
		})
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/shop/catagery.scss';
</style>