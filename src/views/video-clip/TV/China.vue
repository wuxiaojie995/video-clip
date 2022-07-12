<template>
    <div class="left-main">
        <div class="left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="box lefts"> 
                        <img src="@/assets/images/video-clip/TV/斗破苍穹三年之约.png" alt="">
                    </div>
                    <span class="font-top">斗破苍穹三年之约</span><br>
                    <span class="font-bottom">赴三年之约 战云岚之巅</span>
        </div>
        <div class="left-main-right">
            <div class="main-right-box right1" v-for="(item, index) in lis" :key="index"
                @mouseenter="ente(index)" @mouseleave="leav()">
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
                imgurl : require('@/assets/images/video-clip/TV/一人之下.png'),
                name:'一人之下',
                names:'风起云涌罗天大醮'
            },{
                imgurl : require('@/assets/images/video-clip/TV/灵笼.png'),
                name:'灵笼',
                names:'作为人类再一次活下去'
            },{
                imgurl : require('@/assets/images/video-clip/TV/完美世界.png'),
                name:'完美世界',
                names:'石昊石清风携手共赴补天阁'
            },{
                imgurl : require('@/assets/images/video-clip/TV/天官赐福.png'),
                name:'天官赐福',
                names:'为你明灯三千，为你花开满城'
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
        ente(index){
            $(".right1 img").eq(index).css({"transform": "scale(1.2)"});
        },
        leav(){
            $(".right1 img").css({"transform": "scale(1)"}); 
		},
    }
}
</script>