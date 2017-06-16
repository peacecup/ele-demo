import * as types from './mutations-type';
export default {
	[types.SET_ADDRESS]( {commit}){
		let address = localStorage.getItem('address');
		commit(types.SET_ADDRESS,address);
	}
}