<template>
    <div class="shop">
    	<div class="shop_fetcher">
    	<!-- url(//faas.elemecdn.com/desktop/media/img/fetch-takeout-sprites.2c51a3.png) 0 -120px no-repeat 
    	//faas.elemecdn.com/desktop/media/img/takeout.408a87.png-->
    	    <img src="//faas.elemecdn.com/desktop/media/img/takeout.408a87.png" width="186px" height="56px">
    	</div>
    	<div class="shop_catagery">
    		<catagery :bus="bus"></catagery>
    	</div>
    	<div class="shop_store">
    	    <restaurant :bus="bus"></restaurant>  		
    	</div>
    </div>
</template>

<script>
import catagery from './catagery';
import restaurant from './restaurant';
import Vue from 'vue';
/*import { getRestaurants } from '../../service/getData'*/

export default {
	data(){
		return {
			bus: new Vue()
		}
	},
	methods:{

	},
	computed:{

	},
	components:{
		catagery,
		restaurant
	},
	mounted(){
		/*this.bus.$on('catageryChange',function(fri_Id,sec_Id){ 
			let addr = JSON.parse(localStorage.getItem('address'));
			let restaurant_Id = fri_Id;
			if(sec_Id && fri_Id!=sec_Id){
				restaurant_Id = sec_Id
			}
			getRestaurants(addr.latitude,addr.longitude,0,10,restaurant_Id,3).then( res => {
				console.log(res);
			})
		})*/
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/common/mixin.scss';
.shop{
	@include setWH(100%,100%);
	padding: 0 152px;
	@include flex(column,flex-start,stretch);
	.shop_fetcher{
		min-height: 50px;
		max-height: 50px;
		@include flex(row,flex-end,stretch);
		img{
			 z-index: 100;
			 margin-right: 20px;
			 cursor: pointer;
		}			
	}
	.shop_catagery{
		min-height: 95px;
	}
	.shop_store{
		flex: 1;
		padding: 25px 0;
		span{
			width: 200px;
			height: 130px;
			background:url("//faas.elemecdn.com/desktop/media/img/fetch-takeout-sprites.2c51a3.png") 0 -120px no-repeat;
		}

	}


}
</style>