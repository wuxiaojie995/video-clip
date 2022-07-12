<template>
    <div class="idol-inner">
        <div class="idol-bettom"></div>
        <div class="idol-bettom2"></div>
        <div class="idol">
            <div class="idol-header">
                <img src="@/assets/images/video-clip/idol/二次元偶像巨星.png" alt="">
                <span>二次元偶像巨星</span> 
            </div>
            <div class="idol-main">    
                <ul v-for="(item,index) in head" :key="index">
                    <li>
                        <div><img :src="item.imgs" alt=""></div>
                        <div><a href="javascript:">{{item.name}}</a></div>
                        <div>{{item.text}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            head:[{
                imgs : require('@/assets/images/video-clip/idol/血小板.png'),
                name:'血小板',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/清时明月.png'),
                name:'清时明月',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/种花家.png'),
                name:'种花家',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/斗罗大陆.png'),
                name:'斗罗大陆',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/魔道祖师.png'),
                name:'魔道祖师',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/狐妖小红娘.png'),
                name:'狐妖小红娘',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/灵笼.png'),
                name:'灵笼',
                text:'元气满满打工人'
            },{
               imgs : require('@/assets/images/video-clip/idol/非人哉.png'),
                name:'非人哉',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/斗破苍穹.png'),
                name:'斗破苍穹',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/航海王.png'),
                name:'航海王',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/火影忍者.png'),
                name:'火影忍者',
                text:'元气满满打工人'
            },{
                imgs : require('@/assets/images/video-clip/idol/柯南.png'),
                name:'柯南',
                text:'IVB经典回归港归式破案'
            }]
        }
    }
}
</script>