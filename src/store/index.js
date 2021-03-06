import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	hideHeader:false,//隱藏版頭
	isMobile: false, //裝置狀態
	isOpenMenu: false, //選單開啟狀態
	activeMenu: 0, //當前顯示的導覽
	jsonDatas:Object
}

export default new Vuex.Store({
	state,
	mutations: {
		//設置版頭顯示狀態
		setHideHeader(state,val){
			state.hideHeader = val;
		},
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
		},
		setJsonDatas(state, val){
			state.jsonDatas = val;
		}
	},
	actions: {
		
	},
	getters: {
		getHideHeader: state => state.hideHeader,
		getMobileStatus: state => state.isMobile,
		getMenuStatus: state => state.isOpenMenu,
		getNavStatus: state => state.activeMenu,
		getJsonDatas:state => state.jsonDatas
	}
})
