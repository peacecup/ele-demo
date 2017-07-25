import { baseUrl } from '../config/env';

import axios from 'axios';
import { Loading } from 'element-ui';


export default async(type,url,data) => {
	var result = null;
	//兼容请求方式大小写
	type = type.toUpperCase();
    //请求参数
	var config = {
		//饿了么接口域名地址
		url: url,
		baseUrl: baseUrl,
		method: type,
		responsetype: 'json',
		headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		},
		//设定promise根据状态吗切换状态的标准	
		validateStatus: function(status){
            return status >= 200 && status < 300;//默认
        },
        //超过10秒，请求停止,不打开了，超市不显示数据很蛋疼
        //timeout:2000,
    }
    if(type == 'GET'){
    	config.params =data;
    }else{
    	config.data = data;
    }
    let loadingInstance  = Loading.service({
    	fullscreen:true,
    	lock: true,
    	text: '加載中！'
    });
    var response = await axios(config);
    result = response.data;
    loadingInstance.close();
    return result;
	
}