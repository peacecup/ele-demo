<template>
    <div class="catagery">
    	<span>商家分类:</span>
    	<div class="catagery_list">
    	    <span v-for="catagery in catageryList" ref="catagery.id" @click="catageryClick(catagery)" 
    	        :class="{active:activeItem == catagery.name}">
    	        {{catagery.name}}
    	    </span>
    	</div>
    </div>
</template>

<script>
import { getCatagery } from '../../service/getData'
export default {
	data(){
		return {
			//分类列表
			catageryList:[],
			//当前选中的分类列表名称
			activeItem: '全部商家'
		}
	},
	computed:{

	},
	methods:{
		catageryClick(catagery){
			this.activeItem = catagery.name;
		}

	},
	components:{

	},
	mounted(){ 
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
	@include setWH(98%,100%);
	@include flex(row,flex-start,flex-start);
	&>span{
		width: 100px;
		margin-top: 3px;
		padding: 0 10px;
		color: #999;
		font-size: 14px;
		line-height: 26px;
	}
	.catagery_list{
		@include flex(row,flex-start,flex-start);
		flex-wrap:wrap;
		&>span{
			cursor: pointer;
			text-align: center;
			width: 76px;
			line-height: 26px;
			margin: 5px 6px;
			color: #666;
			font-size: 14px;
			&:hover{
			    background-color: #f6f6f6;
				border-radius: 3px;
			}
		}
		&>.active{
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