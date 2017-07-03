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
	computed:{

	},
	methods:{
		fri_catageryClick(catagery){
			//由于数据里二级菜单默认的id是一级父菜单的id，所以这里，两个切换选中class的变量都为一级id
			this.fri_activeItem = catagery.id;
			this.sec_activeItem = catagery.id;	
			this.sec_catageries = catagery.sub_categories;
		},
		sec_catageryClick(catagery){
			this.sec_activeItem = catagery.id;
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
@import '../../style/common/mixin.scss';
.catagery{
	background-color: #fff;
	border-radius: 2px;
	border: 1px solid #e6e6e6;
	padding: 10px;
	width: 98%;
	min-height: 95px;
	@include flex(column,flex-start,stretch);
	&>.fri_catagery{
		width: 100%;
		height: 80px;
		@include flex(row,flex-start,flex-start);
	    &>span{
	    	width: 100px;
	    	margin-top: 3px;
	    	padding: 0 10px;
	    	color: #999;
	    	font-size: 14px;
	    	line-height: 26px;
	    }
	    &>.catagery_list{
	    	@include flex(row,flex-start,flex-start);
	    	flex-wrap:wrap;
	    	&>span{
	    		cursor: pointer;
	    		text-align: center;
	    		width: 76px;
	    		line-height: 26px;
	    		margin: 5px 5px; 
	    		color: #666;
	    		font-size: 14px;
	    		&:hover{
	    		    background-color: #f6f6f6;
	    			border-radius: 3px;
	    		}
	    	}
	    	&>.fri_active{
	    		background-color: #f6f6f6;
	    		line-height: 36px;
	    		margin: 3px 6px;
	    		border-radius: 3px;
	    	}
	    }
	}	
	&>.sec_catagery{
		background-color: #f6f6f6;
		margin: 10px 0 0 95px; 
		@include flex(row,flex-start,flex-start);
		flex-wrap:wrap;
		&>span{
			cursor: pointer;
	    	text-align: center;
	    	width: 65px;
	    	line-height: 26px;
	    	margin: 5px 6px;
	    	color: #666;
	    	font-size: 13px;
		}
		&>.sec_active{
			background-color: #0089dc;
	    		color: #fff;
	    		border-radius: 3px;
	    		&:hover{
	    			background-color: #0089dc;
	    		}
		}

	}
}
</style>