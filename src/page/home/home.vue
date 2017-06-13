<template>
	<div class="map_container">
	   
	    <div class="map_content">
	        <div class="map_qiaodan">
	        	<img src="https://faas.elemecdn.com/desktop/media/img/image_kobe.b5df90.png"/>
	        </div>
	        <div class="map_place">
	        	<div class="map_icon">
	        	    <img src="https://faas.elemecdn.com/desktop/media/img/map-logo-center.4eb348.png"></img>
	        	</div>
	        	<div class="map_form">
	        	    <el-popover ref="cities" trigger="click"  placement="bottom-start"  width="740" v-model="visible">
	                    <map-city :guessCity="guessCity" v-on:choosecity='switchCity'></map-city>
	                </el-popover>
	        		<el-autocomplete popper-class="search_item" v-model="address" :fetch-suggestions="queryCityAsync" size="large" 
	        		 custom-item="search-item" placeholder="请输入你的收货地址（写字楼、小区、街道或者学校"  @select="handleSelect">
	        		    <el-button slot="prepend" v-popover:cities >
	        		        {{nowcity.name}}  <i class="el-icon-caret-bottom" style="color:#8492a6;"></i>
	        		    </el-button>
	        		</el-autocomplete>
	        		<div class="map_search" v-on:click="search">
	        		    <span>搜索</span>
	        		</div>
	        	</div>
	        	<div class="map_liubai"></div>
	        </div>
	    </div>
	    <div class="map_footer">
	        <div class="map_app">
	            <div class="map_qrcode">
	            	<img src="/static/img/QR code.png">
	            	<span>扫码下载APP</span>
	            </div>
	            <div class="map_app_text">
	                <p>新用户首次下单</p>
	                <strong>最高立减20元</strong>
	                <p>立即下载App，享更多优惠吧</p>
	            	
	            </div>
	        </div>	    	
	        <div class="map_link">
	            <p class="mapfooter-link">
	                <a href="http://kaidian.ele.me" ubt-click="1434">我要开店</a>
	                <a href="/support/about" ubt-click="1435">联系我们</a> 
	                <a href="/support/about/agreement" ubt-click="1436">服务条款和协议</a> 
	                <a href="http://jobs.ele.me" ubt-click="1437">加入我们</a> 
	                <a href="//fengniao.ele.me/">蜂鸟配送</a>
	            </p>
	        </div>
	        <div class="map_copyright">
	            增值电信业务许可证 : 
	            <a href="http://www.shca.gov.cn/" target="_blank">沪B2-20150033</a> | 
	            <a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备 09007032</a> | 
	            <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823" target="_blank">上海工商行政管理</a> 
	            Copyright ©2008-2017 上海拉扎斯信息科技有限公司, All Rights Reserved.
	        </div>
	        <div class="map_police">
	        	<a>
	        		<img src="/static/img/police.jpg"/>
	        	</a>
	        </div>
	    </div>
	</div>
</template>

<script>
import {getCityGuess,searchPlace} from '@/service/getData';
import mapCity from './mapcity';
import Vue from 'vue';
Vue.component('search-item',{
    functional: true,
    render: function (h, ctx) { 
        var item = ctx.props.item;
        return h('li', ctx.data, [
            h('div', { attrs: { class: 'name' } }, [item.name]),
            h('span', { attrs: { class: 'addr' } }, [item.address])
        ]);
    },
    props: {
        item: { type: Object, required: true }
    }
});


export default {
	data()	{
		return {
			msg: "这里是home",
			address:'',
			nowcity: '',
			guessCity:'',
			visible: false,
			searchList:[]
		}
	},
	mounted(){
		getCityGuess().then( (res) =>{
			this.guessCity = res;
			this.nowcity = res;
		})
	},
	components:{
		mapCity
	},
	methods: {
		switchCity(cityName){
			if(!cityName){
				this.nowcity = this.guessCity;
			}else{
				this.nowcity = cityName;
			}
			this.visible = ! this.visible;
		},
		search(){
			if(this.address){
				searchPlace(this.nowcity.id,this.address).then( res => {
					this.searchList = res;
				})
			}
		},
		queryCityAsync(queryString,cb){
			let result = [];
			if(queryString){
				searchPlace(this.nowcity.id,this.address).then( res => {
					this.searchList = res;
					result = res;
				}).then(()=>{
					cb(result);
				})
			}else{
				cb(result);
			}
		},
		handleSelect(item){
		    
		}
	}
}

</script>

<style lang='scss'>
@import '../../style/home/home.scss';

.search_item {
    li {
        line-height: normal;
        padding: 7px;
        @include flex(flex,column,flex-start,stretch);
        .name {
            text-overflow: ellipsis;
            cursor: pointer;
            font-size: 14px;
        }
        .addr {
            text-overflow: ellipsis;
            font-size: 12px;
            color: #b4b4b4;
        }
    
        .highlighted .addr {
          color: #ddd;
        }
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
    ::-webkit-scrollbar {  
        width: 0px;  
        height: 0px;   
    }
}
</style>