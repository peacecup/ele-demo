<template>
    <div class="footer">
        <el-popover ref="elemeorder" placement="top" width="140" trigger="hover">
            <div class="elemeorder">
                <img src="//faas.elemecdn.com/desktop/media/img/wexinqc100@2x.393ade.png" width="130px" height="130px" />
                <span>微信号：elemeorder</span>
                <span>饿了么网上订餐</span>
            </div>
        </el-popover>
        <div class="options">
        	<div class="links">
        	    <ul>
        	    	<li>用户帮助</li>
        	    	<li>服务中心</li>
        	    	<li>常见问题</li>
        	    	<li>在线客服</li>
        	    </ul>
        	    <ul>
        	    	<li>商务合作</li>
        	    	<li>我要开店</li>
        	    	<li>加盟指南</li>
        	    	<li>市场合作</li>
        	    	<li>开放平台</li>
        	    </ul>
        	    <ul>
        	    	<li>关于我们</li>
        	    	<li>饿了么介绍</li>
        	    	<li>加入我们</li>
        	    	<li>联系我们</li>
        	    	<li>规则中心</li>
        	    </ul>
        		
        	</div>
        	<div class="contact">

        	    <ul>
        	    	<li>24小时客服热线 : 10105757</li>
        	    	<li>意见反馈 : feedback@ele.me</li>
        	    	<li>
        	    	    关注我们 :
        	    	    <i class="icon-wechat" v-popover:elemeorder></i>
        	    	    <a class="icon-weibo" href="http://weibo.com/login.php"></a>
        	    	</li>
        	    </ul>
        		
        	</div>
        	<div class="ercode">
        	    <img src="/static/img/QR code.png"/> 
        	    <ul>
        	        <li>下载手机版</li>
        	        <li>扫一扫,手机订餐方便</li>
        	    </ul>
        		
        	</div>
        </div>
        <div class="police">
        	<ul>
        		<li>所有方：上海拉扎斯信息科技有限公司</li>
        		<li>
        			<p>增值电信业务许可证 : 
        			    <a href="http://www.shca.gov.cn/" target="_blank">沪B2-20150033</a> | 
        			    <a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备 09007032</a> | 
        			    <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823"    target="_blank">上海工商行政管理</a>
        			    Copyright ©2008-2017 ele.me, All Rights Reserved.
        			</p>
        		</li>
        		<li>
        			<img src="/static/img/police.jpg"/>
        		</li>
        	</ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../../style/home/footer.scss';
</style>