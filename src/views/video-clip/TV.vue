<template>
    <div class="film ">
        <div class="left">
            <div class="left-head ">
                <a href="javascript:" style="width:50px;height:50px;"><img src="@/assets/images/video-clip/TV/TV.png" alt="" style="width:49px"></a>
                <a href="javascript:" style="color:gray; font-size:30px;padding-left:5px">动漫</a>
                <a href="javascript:">连续剧</a>
                <ul>
                    <li :class="{active : current=='China'}" @click="current='China'">国漫</li>
                    <li :class="{active : current=='Japan'}" @click="current='Japan'">日漫</li>
                    <li :class="{active : current=='USA'}" @click="current='USA'">欧美漫</li>
                </ul>
            </div>
            <component :is="current"></component>
        </div>
        <div class="right">
            <div class="right-head">
                <a href="javascript:">连续剧排行榜</a>
            </div>
            <div class="right-main mains" >
                <ul>
                    <li v-for="(items,index) in araye" :key="index"
                        @mouseenter="aray(index)" @mouseleave="arays()"
                        >
                        <span :class="sstt[index]">{{items.num}}</span>
                        <a href="javascript:">{{items.name}}</a>
                        <img src="@/assets/images/video-clip/TV/豆瓣.png">
                        <p>{{items.nums}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>
<script>
import $ from 'jquery'
import China from '@/views/video-clip/TV/China.vue'
import Japan from '@/views/video-clip/TV/Japan.vue'
import USA from '@/views/video-clip/TV/USA.vue'
export default {
    name:'TV',
    data(){
        return{
            current: 'China',
            araye : [{
                num:'1',
                name:'国王排名',
                nums:'9.0',
            },{
                num:'2',
                name:'海贼王',
                nums:'8.7',
            },{
                num:'3',
                name:'斗罗大陆',
                nums:'8.5',
            },{
                num:'4',
                name:'完美世界第一季',
                nums:'8.3',
            },{
                num:'5',
                name:'斗破苍穹三年之约',
                nums:'7.9',
            }],
            sstt:[
                "ss1",
                "ss2",
                "ss3",
                "ss4",
                "ss5"
            ]
        }
    },
    components: {
        China,
        Japan,
        USA
    },
     methods:{
        aray(index){
            $(".mains a").eq(index).css({"color":"rgb(255, 150, 80)"});
            $(".mains li").eq(index).css({"border": "3px solid rgb(238, 238, 238)","background-color": "rgb(230, 230, 230)"});
        },
        arays(){
            $(".mains a").css({"color": "black"});
            $(".mains li").css({"border": "","background-color": ""});
		},
    }
}
</script>
<style scoped>
.active{
    background-color: #fa7373;
}
.ss1{
    color: #ff3a3a;
}
.ss2{
    color: #ff8b33;
}
.ss3 {
    color: #ffbd59;
}
.ss4,.ss5 {
    color: #adadad;
}
</style>