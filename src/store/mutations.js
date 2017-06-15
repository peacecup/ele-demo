import * as types from './mutations-type';

export default {
	[types.SET_ADDRESS](state,address){
		state.address = address;
	}
}