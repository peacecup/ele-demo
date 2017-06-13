//饿了么数据接口域名
let baseUrl = null;
let routerMode = null;

// 获取ele提供的图片
const imgBaseUrl = "https://faas.elemecdn.com";

if (process.env.NODE_ENV == "development") {
	baseUrl = null;
	routerMode = 'hash';
} else {
	baseUrl = 'https://mainsite-restapi.ele.me';
	routerMode = 'hash'
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl
};