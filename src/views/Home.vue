<template>
    <div class="home">
        <section class="sec-1">
            <div class="container pt-lg-5 pt-3">
                <div class="row">
                    <div class="img-box col-lg-5 mb-4">
                        <img :src="contentDatas.about.img" alt="about image" class="w-100">
                    </div>
                    <div class="content-box col-lg-6">
                        <h4 class="title">{{ contentDatas.about.title }}</h4>
                        <p class="content">{{ contentDatas.about.content }}</p>
                        <ul class="profile pt-3">
                            <li>
                                <span class="badge badge-secondary mr-2">Name</span>
                                <span class="">{{ contentDatas.about.name }}</span>
                            </li>
                            <li>
                                <span class="badge badge-secondary mr-2">Line</span>
                                <span class="">{{ contentDatas.about.line }}</span>
                            </li>
                            <li>
                                <span class="badge badge-secondary mr-2">Mail</span>
                                <span class=""><a :href="[this.contentDatas.about.mail]">{{ contentDatas.about.mail }}</a></span>
                            </li>
                            <li>
                                <span class="badge badge-secondary mr-2">Mobile</span>
                                <span class="">{{ contentDatas.about.mobile }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {},
    data: function(){
        return{
            contentDatas:{
                about:{
                    title:"資深網頁 / 插畫 / 視覺設計師",
                    content:"從事網頁設計工作十多年，對網頁設計具有高度熱誠，為您提供形象官網、活動網站、網站平台設計，RWD自適應網站技術服務，媒體素材設計、插畫設計、平面設計及影像修圖。",
                    name:"劉怡德",
                    line:"yider",
                    mail:"superyider@gmail.com",
                    mobile:"0939180232",
                    img:"https://fakeimg.pl/400x300/eee"
                }
            }
        }
    },
    methods: {}
};
</script>
<style lang="scss">
.sec-1{
    .container{
        .row{
            justify-content: center;
            .content-box{
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
                        padding: 5px;
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
}
</style>
