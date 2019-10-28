const mobileMax = 767;//自定義手機版切換寬度
const menuDatas = [
    {name:"About",link:""},
    {name:"Skills",link:""},
    {name:"Illustration",link:""},
    {name:"Design",link:""},
    {name:"Graphic",link:""},
];//header Menu 資料

export default {
    install(Vue, options) {
        Vue.prototype.$menuDatas = menuDatas;
        Vue.prototype.$getMobileWidth = mobileMax;
    }
}