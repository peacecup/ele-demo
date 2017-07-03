<template>
    <div class="shop">
    	<div class="shop_fetcher">
    	<!-- url(//faas.elemecdn.com/desktop/media/img/fetch-takeout-sprites.2c51a3.png) 0 -120px no-repeat 
    	//faas.elemecdn.com/desktop/media/img/takeout.408a87.png-->
    	    <img src="//faas.elemecdn.com/desktop/media/img/takeout.408a87.png" width="186px" height="56px">
    	</div>
    	<div class="shop_catagery">
    		<catagery></catagery>
    	</div>
    	<div class="shop_store">
    	<span></span>
    		
    	</div>
    </div>
</template>

<script>
import catagery from './catagery';
export default {
	data(){
		return {

		}
	},
	methods:{

	},
	computed:{

	},
	components:{
		catagery
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/common/mixin.scss';
.shop{
	@include setWH(100%,1947px);
	padding: 0 152px;
	@include flex(column,flex-start,stretch);
	.shop_fetcher{
		/* flex-basis: 50px; */
		max-height: 50px;
		@include flex(row,flex-end,stretch);
		img{
			 z-index: 1000;
			 margin-right: 20px;
			 cursor: pointer;
		}			
	}
	.shop_catagery{
		min-height: 95px;
	}
	.shop_store{
		flex: 1;
		span{
			width: 200px;
			height: 130px;
			background:url("//faas.elemecdn.com/desktop/media/img/fetch-takeout-sprites.2c51a3.png") 0 -120px no-repeat;
		}

	}


}
</style>