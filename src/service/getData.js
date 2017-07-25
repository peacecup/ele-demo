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
var getRestaurants = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
		let supportStr = '';
		support_ids.forEach(item => {
			if (item.status) {
				supportStr += '&support_ids[]=' + item.id;
			}
		});
		let data = {
			latitude,
			longitude,
			offset,
			limit: '20',
			'extras[]': 'activities',
			keyword: '',
			restaurant_category_id,
			'restaurant_category_ids[]': restaurant_category_ids,
			order_by,
			'delivery_mode[]': delivery_mode + supportStr
		};
		return fetch('GET', '/shopping/restaurants', data);
	};

export {
	getCityGuess,
	getCityGroup,
	searchPlace,
	getCatagery,
	getRestaurants
};