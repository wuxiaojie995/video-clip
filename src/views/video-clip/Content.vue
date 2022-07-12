<template>
    <div class="content">
        <div class="headings">
            <img src="@/assets/images/video-clip/content/必追好番.png" alt="">
            <span>必追好番</span>
        </div>       

        <div class="box-outside" >
            <div class="box-inner">
                <div class="inner-box" v-for="(item,index) in photo" :key="index"
                @mouseenter="enter(index)" @mouseleave="leave()">
                    <ul>
                        <li v-show="arry"> 
                        <div class="inner-photo"   >    
                            <a href="javascript:" >
                                <img :src="item.img" alt="">
                                <div class="inner-font">{{item.inner}}</div>
                                <span class="font-top">{{item.name}}</span><br>
                                <span class="font-bottom">{{item.text}}</span>
                            </a>
                        </div>
                        </li>
                        <li  v-show="arrys&&index==current">
                            <div class="inner-video">
                                <a href="javascript:" >
                                    <ul>
                                        <li><video :src="item.video" controls="controls"></video></li>
                                        <li>
                                            <div class="two">
                                                <span class="twa">{{item.name}}</span><br>
                                                <span class="twb">&nbsp;{{item.title}}&nbsp;</span>
                                                <p>{{item.text1}}</p>
                                                <button>立即观看 </button>
                                            </div>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </li>
                    </ul>    
                </div>
            </div>        
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            current:0,
            arry:true,
            arrys:false,
            photo:[{
                img : require('@/assets/images/video-clip/content/武逆.png'),
                inner : '更至19集' ,
                name : '武逆',
                text : '身怀绝世体质却被误认废材',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'魔幻',
                text1:'简介：天武大陆，强者为尊。风家大少风浩，身怀绝世体质，却被认为是修炼废柴，受尽屈辱！'
                    +'机缘之下，身体异变，让他逆转人生！他以异晶锻体，成就无上肉身。待得掌控虚武之时，碎灭乾坤，怒斩八方！',
            },{
                img : require('@/assets/images/video-clip/content/妖者为王.png'),
                inner : '更至14集' ,
                name : '妖者为王',
                text : '勇者世界开启功法升级',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'冒险',
                text1:'简介：少年萧浪，从小和双腿残疾的姑姑、捡来的弟弟相依为命，他怀着救治姑姑的心愿四处奔走，'
                    +'险入温柔乡结识宿命红颜柳雅，强战武院联赛绝杀火凤城主……随着惊险十足的冒险经历展开，他的身世也一点一点的拨开云雾——神魂大陆四大超级世家萧家的长孙！'
                    +'他用实力捍卫自己。勇闯边疆，神魂城遇机遇，功法升级开启氪金-开挂之路！',

            },{
                img : require('@/assets/images/video-clip/content/私宠甜心宝贝.png'),
                inner : '12集全' ,
                name : '私宠甜心宝贝',
                text : '奈何boss要娶我高甜原作',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'恋爱',
                text1:'简介：十八线女艺人夏林身患”血癌”，濒临萠溃的夏林为了活下去抓住了霸道总裁凌异洲抛出的带刺橄榄枝——要想得到配型骨髓就得和凌异洲结婚。'
                    +'为尽早接受骨髓移植，同时继续开展个人演绎事业，夏林和凌异洲协议隐婚，一段“蓄谋已久的”爱情就此拉开序幕。',

            },{
                img : require('@/assets/images/video-clip/content/男神萌宝一锅端.png'),
                inner : '44集全' ,
                name : '男神萌宝一锅端',
                text : '冷面王爷缠上刁蛮丫头',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'恋爱 其它',
                text1:'简介： “慕先生，说好了就当你女儿的保姆妈妈，你怎么越管越宽了？我和谁见面，我有几个男性朋友这种事不在契约范围内！'
                    +'还有，当初谁在契约里定的‘不允许爱上你’，你不会忘了吧？” “我毁约了，违约金是我和我女儿，还款期限是一辈子，章小姐，你愿意收下吗？”',

            },{
                img : require('@/assets/images/video-clip/content/峡谷重案组.png'),
                inner : '38集全' ,
                name : '峡谷重案组',
                text : '狄仁杰携重案组绝地追击',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'战斗 冒险 魔幻',
                text1:'简介：元芳杨戬平安醒来，重案组似乎回到了平稳的日常。但峡谷里暗流汹涌未曾停歇，黑幕仍未分明。'
                    +'敌暗我明，狄仁杰要如何带领众人破局？阴谋诡术与秩序侠义，谁更胜一筹？2月16日，《峡谷重案组》第二季为您呈现。',

            },{
                img : require('@/assets/images/video-clip/content/梦塔·雪谜城.png'),
                inner : '13集全' ,
                name : '梦塔·雪谜城',
                text : '热血少年误闯梦境救世界',
                video: require('@/assets/images/video-clip/过.mp4'),
                title:'搞笑.战斗.冒险.魔幻',
                text1:'简介：逗比少年任小冲被两个看似可爱实则腹黑的老猫精拐骗到梦界，在美女塔主白姐姐的“调教”下成为了笛见塔新一任的化梦武士，'
                    +'然而在塔中竟然遇见了现实世界的死对头武伽！现实世界中的警官和小混混不得不组队化梦，梦界中的法则也随之揭开，任小冲从此开启了他一路挨打升级拯救世界的全新生活。',
            }]
        }
    },
    methods:{
		enter(index){
            $(".inner-box").css({"left": -190 * index});
            if(index==5){
                $(".inner-box").css({"left": -165 * index});
            }
            this.arrys=true;
            this.current = index;
        },
        leave(){
            $(".inner-box").css({"left": 0});
            this.arrys=false,
            this.arry=true
		}
    }
}
</script>