import fetch from './fetch';
//获取当前城市
var getCityGuess = () => fetch('get', '/v1/cities', {
	type: 'guess'
})
//获取所有城市
var getCityGroup = () => fetch('GET', '/v1/cities', {
	type: 'group'
})
//根据城市搜索地址
var searchPlace = (cityId, address) => fetch('GET', '/v1/pois', {
	type: 'search',
	city_id: cityId,
	keyword: address

})
//根据地址hash值搜索餐厅分类
var getCatagery = (latitude,longitude) => fetch('GET','/shopping/v2/restaurant/category',{
	latitude,
	longitude
})
//根据分类查询附近商家

export {
	getCityGuess,
	getCityGroup,
	searchPlace,
	getCatagery
};