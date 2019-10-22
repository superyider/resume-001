export default {
    install(Vue, options) {
        //test
        Vue.prototype.$mytest = function () {
            alert('yoyoyoaaaaa');
        }
    }
}