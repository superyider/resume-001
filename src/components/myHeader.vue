<template>
    <header class="header">
        <div class="container">
            <!--a href class="logo">
                <img src="images/logo_svg.svg" />
            </a-->

            <!-- menu-btn 漢堡 -->
            <transition name="fade">
                <button v-show="isMobile" :class="['nav_btn', (isOpenMenu) ? 'close':'']">
                    <span class="bar-1"></span>
                    <span class="bar-2"></span>
                    <span class="bar-3"></span>
                </button>
            </transition>

            <!-- menu-list -->
            <transition name="fade">
                <ul class="nav" :class="['nav',(isMobile) ? 'mobile':'']">
                    <li class="item1">
                        <a class="nav-link">about me</a>
                    </li>
                    <li class="item2">
                        <a class="nav-link">my skill</a>
                    </li>
                    <li class="item3">
                        <a class="nav-link">illustration</a>
                    </li>
                    <li class="item4">
                        <a class="nav-link">web design</a>
                    </li>
                    <li class="item5">
                        <a class="nav-link">graphic {{ this.screenWidth }}</a>
                    </li>
                </ul>
            </transition>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    height: 60px;
    width: 100%;
    background: rgb(209, 209, 209);
    display: flex;
    .container {
        position: relative;
        .nav_btn {
            position: absolute;
            width: 60px;
            height: 60px;
            border: 1px solid red;
            top: 0;
            right: 0;
            padding: 14px 10px;
            background: none;
            border: none;
            outline: none;
            z-index: 999;
            &.close {
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
                    animation: rotatiom_right_ani 0.3s ease-in-out 0s 1
                        alternate forwards;
                    -webkit-animation: rotatiom_right_ani 0.3s ease-in-out 0s 1
                        alternate forwards;
                }
            }
            span {
                display: block;
                height: 2px;
                width: 24px;
                margin: 0px auto 5px;
                background: #3b3b3b;
            }
        }
        .logo {
            display: block;
            width: 100px;
            height: 40px;
            margin: 10px;
            text-align: left;
            img {
                height: 100%;
                opacity: 0.9;
            }
        }
        .nav {
            position: absolute;
            min-height: 60px;
            top: 0;
            right: 0;
            align-items: center;
            &.mobile {
                display: none;
            }
            li {
                a.nav-link {
                    cursor: pointer;
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
            screenWidth: document.body.clientWidth
        };
    },
    mounted() {
        //resize
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
        this.init();
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
                }, 500);
            }
        }
    },
    methods: {
        init() {
            let that = this;
            that.isMobile = that.screenWidth < 991 ? true : false;
        }
    }
};
</script>