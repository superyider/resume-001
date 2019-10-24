<template>
    <div class="home">
        <section class="sec-1">
            <!--div class="container pt-lg-5 pt-3">
                <div class="left-box col-lg-5">
                    <h4 class="title">資深網頁 / 插畫 / 視覺設計師</h4>
                    <p class="content">從事網頁設計工作十多年，對網頁設計具有高度熱誠，為您提供形象官網、活動網站、網站平台設計，RWD自適應網站技術服務，媒體素材設計、插畫設計、平面設計及影像修圖。</p>
                    <ul class="profile pt-3">
                        <li>
                            <span class="badge badge-secondary mr-2">Name</span>
                            <span class="">劉怡德</span>
                        </li>
                        <li>
                            <span class="badge badge-secondary mr-2">Line</span>
                            <span class="">yider</span>
                        </li>
                        <li>
                            <span class="badge badge-secondary mr-2">Mail</span>
                            <span class=""><a href="mailTo:superyider@gmail.com">superyider@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
            </div-->
        </section>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {},
    methods: {}
};
</script>
<style lang="scss">
.sec-1{
    .container{
        .left-box{
            text-align: left;
            .title{

            }
            .content{
                font-size: 1em;
                line-height: 2em;
                text-align: justify;
            }
            .profile{
                list-style: none;
                padding: 0;
                margin: 0;
                border-top: 1px solid #ddd;
                li{
                    padding: 0;
                    margin: 0;
                    .badge{
                        width: 100px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
}
</style>
