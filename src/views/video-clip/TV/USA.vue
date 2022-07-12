<template>
    <div class="left-main">
        <div class="left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="box lefts"> 
                        <img src="@/assets/images/video-clip/TV/英雄联盟：双城之战.png" alt="">
                    </div>
                    <span class="font-top">英雄联盟：双城之战</span><br>
                    <span class="font-bottom">承诺一定不会食言，天南海北我都会找到你！</span>
        </div>
        <div class="left-main-right">
            <div class="main-right-box right1" v-for="(item, index) in lis" :key="index"
                @mouseenter="enters(index)" @mouseleave="leaves()">
                <div class="box2"><img :src="item.imgurl" alt=""></div>
                <span class="fonts-top">{{item.name}}</span><br>
                <span class="fonts-bottom">{{item.names}}</span>
            </div>        
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            current: 'China',
            lis:[{
                imgurl : require('@/assets/images/video-clip/TV/星际宝贝.png'),
                name:'星际宝贝',
                names:'博士的第626号实验品已经诞生！'
            },{
                imgurl : require('@/assets/images/video-clip/TV/终极蜘蛛侠.png'),
                name:'终极蜘蛛侠',
                names:'蜘蛛侠加入了“神盾”'
            },{
                imgurl : require('@/assets/images/video-clip/TV/海绵宝宝.png'),
                name:'海绵宝宝',
                names:'IVB经典回归港归式破案'
            },{
                imgurl : require('@/assets/images/video-clip/TV/猫和老鼠.png'),
                name:'猫和老鼠',
                names:'汤姆和杰瑞的搞笑日常'
            }]
        }
    },
    
     methods:{
        show: function (value) {
			this.$router.push({name: value});//页面跳转
		},
		enter(){
            $(".lefts img").css({"transform": "scale(1.1)"});
        },
        leave(){
            $(".lefts img").css({"transform": "scale(1)"});
		},
        enters(index){
            $(".right1 img").eq(index).css({"transform": "scale(1.2)"});
        },
        leaves(){
            $(".right1 img").css({"transform": "scale(1)"}); 
		},
    }
}
</script>