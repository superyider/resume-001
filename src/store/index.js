import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isMobile: false, //裝置狀態
	isOpenMenu: false, //選單開啟狀態
	activeMenu: 0 //當前顯示的導覽
}

export default new Vuex.Store({
	state,
	mutations: {
		//設置裝置狀態
		setMobileStatus(state, val) {
			state.isMobile = val;
		},
		//設置選單開啟狀態
		setMenuStatus(state, val) {
			state.isOpenMenu = val;
		},
		//設置選單顯示狀態
		setNavStatus(state, val) {
			state.activeMenu = val;
		}
	},
	actions: {
	},
	getters: {
		getMobileStatus: state => state.isMobile,
		getMenuStatus: state => state.isOpenMenu,
		getNavStatus: state => state.activeMenu,
	}
})
