<template>
    <div class="bread_crumb">
    	<ul>
    		<li>当前位置:</li>
    		<li :title="addr.address">{{addr.address}}</li>
    		<li><router-link to="/">[切换地址]</router-link></li>
    	</ul>
    	<div class="search">
    	    <el-input v-model="keywold" placeholder="搜索商家，美食..." :style="{width: inputwidth+'px'}" class="switch_width"
    			icon="search" @focus="switchInput(true)" @blur="switchInput(false)">
    		</el-input>
    	</div>
    </div>
</template>

<script>

export default {
	data(){
		return {
			keywold:'',
			inputwidth:300,
			addr: {}
		}
	},
	computed: {

	},
	methods: {
		switchInput(focused){
			if(focused){
				this.inputwidth = 400;
			}else{
				this.inputwidth = 300;
			}
		}
	},	
	components: {

	},
	mounted(){
		let address = localStorage.getItem('address')
		this.addr = JSON.parse(address);

	}
}
</script>

<style lang="scss" scoped>
@import '../../style/common/mixin.scss';

.bread_crumb{
	@include setWH(98%,54px);
	font-size: 12px;
	@include flex(row,space-between,stretch);
	ul{
		height: 100%;
		flex-basis:270px;
		@include flex(row,space-between,center);
		li{
			cursor: pointer;
		}
		:nth-child(1){
		    flex-basis: 51px;
		    color: #999;
		    cursor: default;
	    }
        :nth-child(2){
            flex-basis: 140px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover{
    	        color: #0089dc;
            }
        }
	    :nth-child(3){
            flex-basis: 75px;
            a{
            	cursor: pointer;
            	color: #0089dc;
            }
	    }
		
	}
	.search{
		flex:1;
		@include flex(row,flex-end,center);
		.switch_width{
	        transition-property: width;
	        transition-duration: 1s;
	        transition-timing-function: ease;
	        transition-delay: 0s;
        }
	}
}

</style>