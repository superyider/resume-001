<template lang="pug">
    div(id='home',class='home',v-scroll-spy='{offset:60}')
        section(ref='about',id="sec-1",class='sec-1')
            div(class='container pt-lg-5 pt-3')
                div(class='row')
                    div(ref='contentBox',class='content-box col-lg-8')
                        h4(class='title') {{ contentDatas.about.title }}
                        p(class='content') {{ contentDatas.about.content }}
                        ul(class='profile pt-3')
                            li
                                span(class='badge badge-secondary mr-2') Name
                                span {{ contentDatas.about.name }}
                            li
                                span(class='badge badge-secondary mr-2') Line
                                span {{ contentDatas.about.line }}
                            li
                                span(class='badge badge-secondary mr-2') Mail
                                span
                                    a(:href='[this.contentDatas.about.mail]') {{ contentDatas.about.mail }}
                            li
                                span(class='badge badge-secondary mr-2') Mobile
                                span {{ contentDatas.about.mobile }}
                    div(ref='imgBox',class='img-box col-lg-4 mb-4')
                        img(:src='contentDatas.about.img',alt='img',class="w-100")

        section(ref='skill',id="sec-2",class='sec-2')
            div(class='container pt-lg-5 pt-3')
                div(class='row')
                    div(class='skill-box col-lg-4 mb-4 pt-5 pb-5')
                        h4 {{ contentDatas.skill.title }}
                        ul
                            li(v-for='item in contentDatas.skill.list') {{ item }}

        section(id='sec-3')
            div(class='container')
                div(class='row')
                    div(class='col mt-5')
</template>

<script>
import { TimelineMax } from "gsap";

export default {
    name: "home",
    components: {},
    data: function() {
        return {
            scrollTop: 0,
            secActs: [],
            jsonDatas: [],
            contentDatas: {
                about: {
                    title: "資深網頁 / 插畫 / 視覺設計師",
                    content:
                        "從事網頁設計工作十多年，對網頁設計具有高度熱誠，為您提供形象官網、活動網站、網站平台設計，RWD自適應網站技術服務，媒體素材設計、插畫設計、平面設計及影像修圖。",
                    name: "劉怡德",
                    line: "yider",
                    mail: "superyider@gmail.com",
                    mobile: "0939180232",
                    img: "https://fakeimg.pl/300x300/eee"
                },
                skill: {
                    title: "用專業的技術為您提供服務",
                    list: [
                        "Web Site (RWD)/Campaign Site (RWD)",
                        "Html5/Css3/Scss/jQuery/vueJs",
                        "App User Interface",
                        "Facebook Canvas/Banner",
                        "Graphic/Logo",
                        "Flash ActionScript3"
                    ]
                }
            }
        };
    },
    watch: {
        scrollTop(val) {
            //this.scrollSpy(val);
        }
    },
    created() {
        //取得資料
        this.getData();
    },
    mounted() {
        //設定版頭是否顯示
        this.$store.commit('setHideHeader',false)

        //動畫效果
        const { imgBox, contentBox, about } = this.$refs;
        const sec1Act = new TimelineMax({ delay: 0.4, paused: true });
        this.secActs[0] = sec1Act;
        sec1Act
            .from(contentBox, 1, { y: "10%", opacity: 0 })
            .from(imgBox, 1, { x: "50%", opacity: 0 }, "-=1")
            .play();

        //捲動偵測
        window.onscroll = () => {
            let that = this;
            return (() => {
                var scrolltop =
                    document.documentElement.scrollTop ||
                    window.pageYOfset ||
                    document.body.scrollTop;

                that.scrollTop = scrolltop;

                if (!this.timer) {
                    this.timer = true;
                    let that = this;
                    setTimeout(function() {
                        that.scrollEnd();
                        that.timer = false;
                    }, 300);
                }
            })();
        };
        this.secActs[0].play();
    },
    methods: {
        scrollSpy(scrollNum) {
            let that = this;
            const sec1 = document.getElementById("sec-1").offsetTop - 200;
            const sec2 = document.getElementById("sec-2").offsetTop - 200;
            const sec3 = document.getElementById("sec-3").offsetTop - 200;
            if (scrollNum >= sec1 && scrollNum < sec2) {
                this.$store.commit("setNavStatus", 0);
                this.secActs[0].play();
            }
            if (scrollNum >= sec2 && scrollNum < sec3) {
                that.secActs[0].reverse();
                this.$store.commit("setNavStatus", 1);
            }
            if (scrollNum >= sec3) {
                this.$store.commit("setNavStatus", 2);
            }
        },
        scrollEnd() {
            let that = this;
            that.scrollSpy(that.scrollTop);
        },
        getData() {
            //const cors = "https://cors-anywhere.herokuapp.com/";
            const url =
                "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json";
            let that = this;
            that.axios.get(`${url}`).then(response => {
                that.jsonDatas = Object.keys(response.data.retVal).map(
                    key => response.data.retVal[key]
                );
            });
        }
    }
};
</script>
<style lang="scss">
.sec-1 {
    .container {
        .row {
            justify-content: center;
            .content-box {
                text-align: left;
                .title {
                }
                .content {
                    font-size: 1em;
                    line-height: 2em;
                    text-align: justify;
                }
                .profile {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    border-top: 1px solid #ddd;
                    li {
                        padding: 5px;
                        margin: 0;
                        .badge {
                            width: 100px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }
}

.sec-2 {
    .container {
        .row {
            .skill-box {
                text-align: left;
                ul {
                    line-height: 30px;
                    li {
                        text-align: left;
                    }
                }
            }
        }
    }
}
</style>
