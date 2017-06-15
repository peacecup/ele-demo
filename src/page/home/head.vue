<template>
    <div class="head">
        <el-popover ref="ercode" placement="bottom-start" width="200" trigger="hover">
            <div class="ercode">
                <span>扫一扫，手机订餐更方便</span>
        	    <img src="/static/img/QR code.png">
            </div>
        </el-popover>
        <router-link to="/home" class="icon"></router-link>
    	<div class="nav_one">
    	    <router-link to="/home" >首页</router-link>
    	    <router-link to="/home">我的订单</router-link>
    	    <router-link to="/home">加盟合作</router-link>	
    		
    	</div>
    	<div class="nav_two">
    	    <router-link to="/home">服务中心</router-link>
    	    <router-link to="/home">规则中心</router-link>
    	    <a v-popover:ercode>手机应用</a>   		
    	</div>
    	<el-popover ref="user" placement="bottom-start" width="120" trigger="hover">
            <div class="user">
                <router-link to="">个人中心</router-link>
                <router-link to="">我的收藏</router-link>
                <router-link to="">我的地址</router-link>
                <router-link to="">安全设置</router-link>
                <hr width="100%">
                <router-link to="">退出登录</router-link>
            </div>
        </el-popover>
    	<div class="nav_three">
    	    <span v-popover:user >喧嚣长廊</span>
    	</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../style/home/head.scss";
</style>