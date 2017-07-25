<template>
    <div class="restaurants_all">
        <el-popover ref="dasdasfas" placement="right-start" title="标题" width="200" trigger="hover" >
            <div>dasdasdads</div>
        </el-popover>
    	<div v-for="restaurant in restaurant_List" class="rest_card" >   
    	    <rest-Card :rest="restaurant"></rest-Card> 	
    	    <!-- <el-card class="box-card">
    	        <div class="rest" >
    	            <div class="rest_logo">
    	        	    <img alt="dadada" :src="getImgPath(restaurant.image_path)" width="70px" height="70px" />
    	        	    <span>{{restaurant.order_lead_time}}分钟</span>
    	            </div>
    	            <div class="rest_content">
    	               <span class="title">{{restaurant.name}}</span>
    	               <div class="appraise">
    	                   <star :rate="getRateWidth(restaurant.rating)" font-size="12"></star>
    	                   <span class="month_sale">月售{{restaurant.recent_order_num}}单</span>
    	               </div>
    	               <span class="cost">配送费￥{{restaurant.float_delivery_fee}}</span>
    	               <div class="support">
    	               	    <template v-for="support in restaurant.supports">
    	               	        <i>{{support.icon_name}}</i>
    	               	    </template>
    	               </div>
    	            </div>
    	        </div>
    	                </el-card> -->
    	</div>
    </div>
</template>

<script scoped>

import { getRestaurants } from '../../service/getData';

import restCard from './restCard.vue';

export default {
	data(){
		return {
			restaurant_List: [],
			offset: 0
		}
	},
	props:{
		bus:{ type: Object, required: true}
	},
	computed:{

	},
	components:{
		restCard

	},
	methods:{
		getImgPath(path) {
			let suffix;
			if (!path) {
				return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
			}
			if (path.indexOf('jpeg') !== -1) {
				suffix = '.jpeg'
			} else {
				suffix = '.png'
			}
			let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
			return "https:fuss10.elemecdn.com" + url
		},
		getRateWidth(rate){
			return (rate*20).toString() + "%";

		}

	},
	mounted(){
		let addr = JSON.parse(localStorage.getItem('address'));
		getRestaurants(addr.latitude,addr.longitude,this.offset).then( (res) => {
		   this.restaurant_List = res;
		})
		let self = this;
		self.bus.$on('catageryChange',function(fri_Id,sec_Id){ 
			let addr = JSON.parse(localStorage.getItem('address'));
			let restaurant_Id = fri_Id; 
			if(sec_Id && fri_Id!=sec_Id){
				restaurant_Id = sec_Id
			}
			getRestaurants(addr.latitude,addr.longitude,this.offset,"",restaurant_Id).then( (res) => {
				self.restaurant_List = res;
			})
		})

	}
	
}

</script>

<style lang='scss' scoped>
@import '../../style/common/mixin.scss';
.restaurants_all{
	@include flex(row,flex-start,flex-start);
	width: 98%;
	height: 100%;
	flex-wrap: wrap;
	border: 1px solid #e6e6e6 ;
	background-color: #fff;
	&>.rest_card{
		width:25%;
		height: 140px;
		    &>.box-card{
		    width:100%;
		    height: 100%;
		    border: none;
		    border-bottom: 1px solid #f5f5f5 ;
		    box-shadow: none;
		    cursor: pointer;		
		    &:hover{
		    	background-color:#f5f5f5; 
		    }
	        .rest{
	        	width: 260px;
	        	height: 100px;
		    	@include flex(row,flex-start,stretch);
    
		    	.rest_logo{
		    		width: 90px;
		    	    text-align: center;
		    	    padding: 0 20px 0 0;
		    	    img{
		    	    	display: block;
		    	    	margin-bottom: 8px;
		    	    }
		    	    span{
		    	    	font-size: 12px;
		    	    	color:#999;
		    	    }
		        }
		        .rest_content{
		        	width: 220px;
		        	@include flex(column,flex-start,stretch);
		        	.title{
		        		font-size: 16px;
		        		margin-right: 40px;
		        		margin-bottom: 10px;
		        		font-weight: 600;
		        		overflow: hidden;
		        		white-space: nowrap;
		        		text-overflow: ellipsis;
		        	}
		        	.appraise{
		        		@include flex(row,space-betweens,center);
		        		span{
		        			margin-left: 10px;
		        			font-size: 12px;
		        			color: #999;
		        		}
		        	}	
		        	.cost{
		        		margin-top: 5px;
		        		font-size: 12px;
		        		color: #999;
		        	}    
		        	.support{
		        		@include flex(row,flex-start,center);
		        		margin-top: 10px;
		        		i{
		        			font-size: 12px;
		        		    background: #fff;
                            color: #999999;
                            border: 1px solid;
                            padding: 0;
                            width: 18px;
                            text-align: center;
                            display: inline-block;
                            vertical-align: middle;
                            font-style: normal;
                            line-height: 16px;
                            overflow: hidden;
                            text-align: center;
                            width: 18px;
                            border-radius: 2px;
                            margin-right: 3px;
                            white-space: nowrap
		        		}
		        	}	
		        }
		    }
	    }
	}
	
}
</style>