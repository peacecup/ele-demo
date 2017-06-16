<template>
    <div class="shop">
    	<div class="shop_fetcher">
    		
    	</div>
    	<div class="shop_catagery">
    		<catagery></catagery>
    	</div>
    	<div class="shop_store">
    		
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
	@include flex(column,flex-start,stretch);
	.shop_fetcher{
		flex-basis: 50px;

	}
	.shop_catagery{
		flex-basis: 95px;
	}
	.shop_store{
		flex: 1;

	}


}
</style>