<template>
    <header class="header">
        <!-- menu-btn 漢堡 -->
        <button v-show="isMobile" :class="['nav_btn', (isOpenMenu) ? 'close':'']" @click="menuCtrl">
            <span class="bar-1"></span>
            <span class="bar-2"></span>
            <span class="bar-3"></span>
        </button>
        <div class="container">
            <a href class="logo">
                <img src="images/logo_svg.svg" />
            </a>

            <!-- menu-list -->
            <ul
                :class="['nav',(isMobile) ? 'mobile':'',(isOpenMenu && isMobile) ? 'menuOpen':'',]"
                v-scroll-spy-link
            >
                <li
                    v-for="(item,index) in menuDatas"
                    :key="index"
                    :class="['item','item'+index,( activeMenu == index ) ? 'active':'']"
                >
                    <a class="nav-link" @click="menuActive(index,$event)">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    height: 60px;
    width: 100%;
    background:#fff;
    display: flex;
    z-index: 9999;
    position: fixed;
    top: 0;
    box-shadow: 0 0px 5px 0 rgba(0,0,0,0.2);
    .nav_btn {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 0;
        right: 0;
        padding: 10px 15px;
        background: none;
        border: none;
        outline: none;
        z-index: 999;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        &.close {
            position: fixed;
            span.bar-1 {
                position: absolute;
                animation: rotatiom_left_ani 0.3s ease-in-out 0s 1 alternate
                    forwards;
                -webkit-animation: rotatiom_left_ani 0.3s ease-in-out 0s 1
                    alternate forwards;
            }
            span.bar-2 {
                display: none;
            }
            span.bar-3 {
                position: absolute;
                animation: rotatiom_right_ani 0.3s ease-in-out 0s 1 alternate
                    forwards;
                -webkit-animation: rotatiom_right_ani 0.3s ease-in-out 0s 1
                    alternate forwards;
            }
        }
        span {
            display: block;
            height: 2px;
            width: 24px;
            margin: 3px auto;
            background: #3b3b3b;
        }

        @keyframes rotatiom_left_ani {
            from {
                transform: rotate(0deg);
                -webkit-transform: rotate(0deg);
                position: absolute;
            }

            to {
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                position: absolute;
                top: 26px;
                width: 30px;
            }
        }
        @keyframes rotatiom_right_ani {
            from {
                transform: rotate(0deg);
                -webkit-transform: rotate(0deg);
                position: absolute;
            }

            to {
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
                margin-bottom: 10px;
                position: absolute;
                top: 26px;
                width: 30px;
            }
        }
    }
    .container {
        position: relative;
        .logo {
            display: block;
            width: 100px;
            height: 30px;
            margin: 15px 0;
            text-align: left;
            img {
                height: 100%;
                opacity: 0.6;
            }
        }
        .nav {
            position: absolute;
            min-height: 60px;
            height: 100%;
            top: 0;
            right: 0;
            align-items: center;
            z-index: 9;
            &.mobile {
                position: fixed;
                display: none;
                width: 100%;
                background: #fff;
                flex-flow: column;
                padding-top: 60px;
                li.item {
                    height: auto;
                }
            }
            &.menuOpen {
                display: block;
                animation: openMenu_ani 0.3s ease-in-out 0s 1 alternate forwards;
                -webkit-animation: openMenu_ani 0.3s ease-in-out 0s 1 alternate
                    forwards;
            }
            li.item {
                height: 100%;
                align-items: center;
                display: flex;
                a.nav-link {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    padding: 15px 15px;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    &:hover {
                        background: #fff;
                        color: red;
                    }
                }
                &.active {
                    color: red;
                    a {
                        background: #fff;
                    }
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "myHeader",
    data: function() {
        return {
            isMobile: false,
            isOpenMenu: false,
            screenWidth: document.body.clientWidth,
            activeMenu: 0,
            menuDatas: {}
        };
    },
    mounted() {
        const that = this;
        that.menuDatas = this.$menuDatas;

        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };

        this.init();
    },
    computed:{
        getNavStatus(){
            return this.$store.getters.getNavStatus;
        }
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val;
                this.timer = true;
                let that = this;
                setTimeout(function() {
                    that.init();
                    console.log(that.screenWidth);
                    that.timer = false;
                }, 200);
            }
        },
        getNavStatus(val){
            this.activeMenu = val;
        }
    },
    methods: {
        init() {
            let that = this;
            let mobileMax = that.$getMobileWidth;
            that.isMobile = that.screenWidth < mobileMax ? true : false;
            that.isOpenMenu = that.screenWidth > mobileMax ? false : "";
        },
        //mobile menu control
        menuCtrl() {
            let that = this;
            that.isOpenMenu = !that.isOpenMenu;
        },
        //set menu active
        menuActive(num, event) {
            let that = this;
            this.activeMenu = '';
            this.$store.commit('setNavStatus',num);
            this.activeMenu = num;
            that.menuCtrl();
            
        }
    }
};
</script>