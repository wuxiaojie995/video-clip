<template>
    <div class="preview">
        <div class="preview-main" >
            <div class="preview-header">
                <img src="@/assets/images/video-clip/preview/强势接档.png" alt="">
                <span>强势接档</span> 
            </div>    
            <div class="preview-boxes" v-for="(item,index) in ph" :key="index">
                <div class="preview-main-header" >
                    <div >
                        <img :src="item.img1" alt="">
                        <span>{{item.weeks}}</span><br>
                        <p>{{item.time}}</p>
                    </div>
                </div>
                <div class="preview-main-footer">
                    <div class="preview-inner" @mouseenter="begin(index)" @mouseleave="end()"
                     v-show="even">
                        <div class="preview-img">
                            <img style=" width: 200px;height: 280px;"  :src="item.img2" alt="">
                            <div class="img-top">预告</div>
                            <div class="img-bottom">
                                <img :src="item.img3" alt="">
                                <div>
                                    <p>期待指数</p><br>
                                    <p>{{item.num}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="preview-font">
                            <span>{{item.name}}</span>
                            <p>{{item.names}}</p>
                            <img src="@/assets/images/video-clip/preview/添加收藏.png" alt="">
                        </div>
                    </div>
                    <div class="preview-inner-none" v-show="evens&&curr==index">
                        <div class="inner-none-video">
                            <video :src="item.videos"></video>
                        </div>
                        <div class="inner-none-box">
                            <div class="inner-none-box-fone"><span>{{item.name3}}</span></div>
                            <div class="inner-none-box-fone1">
                                <span>{{item.title1}}</span>
                                <span>{{item.title2}}</span>
                            </div>
                            <div class="inner-none-box-fone2">
                                <p>{{item.text}}</p>
                            </div>
                            <div class="inner-none-box-fone3">
                                <input type="button" value="立即观看"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            even:true,
            evens:false,
            curr:0,
            ph:[{
                img1 : require('@/assets/images/video-clip/preview/箭头红.png'),
                weeks: '本周二',
                time: '12月21日首播',
                img2 : require('@/assets/images/video-clip/preview/紫川.png'),
                img3 : require('@/assets/images/video-clip/preview/指数81.png'),
                num:'81%',
                name:'紫川',
                names:'紫川三杰纵横西川大陆',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'紫川',
                title1:'2021',
                title2:'国内',
                text:'简介：《紫川》动画改编自老猪同名小说，由企鹅影视出品，讲述了神话般的西川大陆，一代代的热血传奇：人类帝国之内，遥远神秘的东方家族里，紫川三杰雄起！大哥帝林沉稳多谋冷酷理智，二哥斯特林统军有方忠君爱国，老三紫川秀被人称之为无赖，却又智勇双全。紫川家族内忧外患，紫川三杰各显神通：'
                +'紫川秀在关键时刻击退凶狠魔族，孤身闯虎穴追杀叛逆雷洪；斯特林以家族为重，无情而又深情惜别恋人…人类、魔族、兽族、远东各族，在这片大陆上纷纷扰扰，纠葛不断。在血与火的交融中，刀与剑的碰撞中，构成了庞大的史诗般的故事——紫川。动画描绘了一个独特奇妙的世界，将一群不同性格的人物，一个个展现出来，谱写了一曲既壮烈，又凄婉的传奇悲歌……'
            },{
                img1 : require('@/assets/images/video-clip/preview/箭头橙.png'),
                weeks: '本周六',
                time: '12月25日首播',
                img2 : require('@/assets/images/video-clip/preview/幻游猎人.png'),
                img3 : require('@/assets/images/video-clip/preview/指数50.png'),
                num:'50%',
                name:'幻游猎人',
                names:'妹控穿越游戏拯救世界',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'幻游猎人',
                title1:'2021',
                title2:'内地',
                text:'简介：公元2079年，人类迎来全新时代--虚拟赛博时代。虚拟世界的弊端日渐展现-不少人混淆虚拟与现实，导致认知错乱，长久的沉迷在虚拟世界之中。为了拯救迷失在幻觉中的人类，幻游猎人组织应运而生。虚默、晴空等五人组成幻游新人组，毅然决定开启被禁止的游戏，进入勇者大陆世界拯救被困玩家。'
            },{
                img1 : require('@/assets/images/video-clip/preview/箭头黄.png'),
                weeks: '12月28日',
                time: '首播',
                img2 : require('@/assets/images/video-clip/preview/万域封神.png'),
                img3 : require('@/assets/images/video-clip/preview/指数60.png'),
                num:'60%',
                name:'万域封神',
                names:'剑荡万域，凡人亦封神',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'万域封神',
                title1:'2020',
                title2:'科幻',
                text:'简介：云飞雪的父亲云天罡与哥哥云飞山在八年前在护送龙脉的任务中惨遭暗算，云家血脉仅剩年幼的云飞雪，而云飞雪也被一股神秘的力量所寄生，那股力量竟与云飞雪合二为一，并幻化出一个与他一模一样的幻影，幻影寄生于云飞雪的意识之中，时刻准备着积蓄力量，吞噬掉他的神魂。刚刚压制住体内幻影的云飞雪收到父兄惨死的噩耗，心知若想为亲人报仇，重振云家，只有韬光养晦，隐藏实力。他明里游手好闲，背地里却聚集了一个名叫“暗影”的组织，暗中调查当年谜案。'
                        +'在潜龙城看似无忧无虑的生活中，其实危机四伏。经过调查，云飞雪找到了当年的线索，顺藤摸瓜找到了当年暮后操控的组织——金龙卫！此时的金龙卫已经不再是皇帝身边值得信任的护卫组织，而是由前朝宦官李圣义操控，以当朝太子为傀儡的邪恶组织，其势力遍布庙堂与江湖。于公于私，云飞雪都要铲除这个祸害人间的组织，但金龙卫实在太过强大且行事缜密，目前云飞雪的实力还不足以与其对抗，只能暗中破坏其计划。'
                        +'但金龙卫的势力已经越来越嚣张，先是暗中出手，灭了东夷一族，强抢增元强体的玄元丹。而后金龙卫的走卒肖无夜也暗中设计离间云飞雪和伙伴文青青，利用文青青来对付云飞雪。另一边金龙卫设计坑害了一直帮助云飞雪的冰城公主一薛思雨，薛思雨被家里强行召回。金龙卫对云飞雪也有所怀疑，将所有的矛头都指向了他，他明白不能再坐以待毙下去。通过“暗影”，云飞雪得知消息，金龙卫不久后在千幻岛与叶家有一场神秘交易在千幻岛上云飞雪帮助叶家赢得了玉脉，渡过难关，从而和叶家少主一叶轻羽结为兄弟。'
                        +'通过叶轻羽，云飞雪得知，金龙卫一直在暗中搜寻珍贵宝物来帮助圣主——本李圣义用来修炼的神秘武功秘籍，而这本秘籍居然是云飞雪失踪多年的母亲所留下的。与此同时云飞雪打探到，哥哥云飞山似乎还活着。父亲云天罡的死，居然和自己的哥哥有关，似乎围绕自己的谜团越来越变得诡异，云飞雪这时才发现，早在八年前，一个针对自己的阴谋早已经悄然展开……'
            },{
                img1 : require('@/assets/images/video-clip/preview/箭头灰.png'),
                weeks: '12月29日',
                time: '首播',
                img2 : require('@/assets/images/video-clip/preview/吞噬星空.png'),
                img3 : require('@/assets/images/video-clip/preview/指数94.png'),
                num:'94%',
                name:'吞噬星空',
                names:'手持利刃，斩碎怪兽！',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'吞噬星空',
                title1:'2020',
                title2:'科幻',
                text:'简介：某一天，地球上出现了不明来由的RR病毒，将世界卷入灾难之中。受到感染的动物变异成为可怕的怪兽，大举入侵，人类面临毁灭之际筑起了围墙，成立基地市作为人类最后的堡垒。人类在这一段时间经历的磨难，被称为“大涅槃时期”。在极端的生存环境下，人类的体能也在逐渐地进步发展，尚武之风兴起，人类的身体素质相比以前有了质的飞越。而这其中的佼佼者，被称为“武者”。'
                    +'18岁的罗峰也梦想着成为其中的一员。此时的他即将高考，正面临着人生十字路口的抉择，却不料怪兽的一次袭击影响了他的人生轨迹。在强大怪兽的威胁之下，市内居民面临危险，军方却束手无策。唯有一名武者挺身而出，保卫了基地市的安全。罗峰被武者的强大所感染，暗自立下成为武者以保护所爱之人的决心。这是一切的开始，罗峰武者之路的起点，也拉开了他传奇人生的序慕。'
                    +'罗峰立志成为武者，前路却并不平坦，他首先要面对的便是外部环境无形中对他施加的影响。罗峰家庭条件不佳，生活拮据，父母无法给予他更多帮助，只能依靠自己的努力。最终，在不断的艰苦磨砺下，罗峰不断发掘自身潜能，得到了能力提升和自我价值的认可。不仅如此，罗峰不仅扛起了供养家庭的重担，还为了守护人类家园、为了人类更好的生存与发展，与其他正义的武者们一起，联手对付凶恶怪兽。在末日绝境之下，罗峰与其他武者们能否击退怪兽、成功守护人类世界？'
            },{
                img1 : require('@/assets/images/video-clip/preview/箭头灰.png'),
                weeks: '1月1日',
                time: '首播',
                img2 : require('@/assets/images/video-clip/preview/星骸骑士.png'),
                img3 : require('@/assets/images/video-clip/preview/指数86.png'),
                num:'86%',
                name:'星骸骑士',
                names:'以凡人之躯，比肩神明！',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'星骸骑士',
                title1:'2020',
                title2:'科幻',
                text:'简介：未来，人类对宇亩的探索进入了繁盛时代。机械师陈未本以为能搭乘星际飞船顺利达到人类开发的新世界——野原星。没想到一觉醒来，野原星成'
                    +'为一片焦土，而队友都变成了可怕的傀僵怪物。陈末并不知道，在休眠舱沉睡的几百年间，人类已经建立了星际联邦，野原星发生异变生灵涂炭。为什么我还活着？——怀着无数疑问，陈末修复了四名性格各异、'
                    +'功能不同的机器人助手，在他们的帮助下每天打怪求生、囤积物资，准备重返地球家园。然而一名从天而降的外星女人彻底打乱了他的归程计划，这位名叫克莱缇的美丽索恩贵族女爵，将倒霉的陈末带向了更大的麻烦之中…'
            },{
                img1 : require('@/assets/images/video-clip/preview/箭头灰.png'),
                weeks: '强势来袭',
                time: '档期待定',
                img2 : require('@/assets/images/video-clip/preview/画江湖之不良人.png'),
                img3 : require('@/assets/images/video-clip/preview/指数75.png'),
                num:'75%',
                name:'画江湖之不良人 第五季 ',
                names:'紫川三杰纵横西川大陆',
                videos:require('@/assets/images/video-clip/过.mp4'),
                name3:'画江湖之不良人 第五季',
                title1:'内地',
                title2:'褚珺',
                text:'简介：娆疆一行归来，李嗣源已称监国，借天子之名四处绞杀不良人，而身为天子的李星云也即将面临一个新的选择……'
            }]
        }
    },
    methods:{
        begin(index){
            this.curr=index,
            this.evens=true
        },
        end(){
            this.evens=false
        }
    }
}
</script>