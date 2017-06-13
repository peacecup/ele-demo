import fetch from './fetch';

var getCityGuess = () => fetch('get', '/v1/cities', {
	type: 'guess'
})

var getCityGroup = () => fetch('GET', '/v1/cities', {
	type: 'group'
})

var searchPlace = (cityId, address) => fetch('GET', '/v1/pois', {
	type: 'search',
	city_id: cityId,
	keyword: address

})

export {
	getCityGuess,
	getCityGroup,
	searchPlace
};