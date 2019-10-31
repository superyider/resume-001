const mobileMax = 767;//自定義手機版切換寬度
const menuDatas = [
    {name:"About",link:"#sec-1"},
    {name:"Skills",link:"#sec-2"},
    {name:"Illustration",link:"#sec-3"},
    {name:"Design",link:"#sec-4"},
    {name:"Graphic",link:"#sec-5"},
];//header Menu 資料

export default {
    install(Vue, options) {
        Vue.prototype.$menuDatas = menuDatas;
        Vue.prototype.$getMobileWidth = mobileMax;
    }
}