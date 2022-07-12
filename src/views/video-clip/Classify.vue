<template>
    <div class="classify">
        <div class="classify-main" >
            <div class="classify-inner" v-for="(item,index) in classify" :key="index">
                <div class="preview-header classify-inner-header">
                    <img :src="item.img1" alt="">
                    <span>{{item.title}}</span> 
                </div>
                <div class="classify-inner-main">
                    <div class="classify-main-big">
                        <div class="classify-main-big-img">
                            <img :src="item.img2" alt="">
                        </div>
                        <div class="big"><span>{{item.name1}}</span></div>
                    </div>
                    <div class="classify-main-small">
                        <div class="classify-main-small-box" >
                           <div class="classify-main-small-img">
                                <img :src="item.img3" alt="">
                            </div>
                            <div class="small"><span>{{item.name2}}</span></div>
                        </div>
                        <div class="classify-main-small-box" >
                           <div class="classify-main-small-img">
                                <img :src="item.img4" alt="">
                            </div>
                            <div class="small"><span>{{item.name3}}</span></div>
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
            classify:[{
                img1 : require('@/assets/images/video-clip/classify/搞笑区.png'),
                title: '搞笑区',
                img2 : require('@/assets/images/video-clip/classify/疯狂的兔子.png'),
                name1:'疯狂的兔子 第4季 普通话',
                img3 : require('@/assets/images/video-clip/classify/阿衰.png'),
                name2:'阿衰',
                img4 : require('@/assets/images/video-clip/classify/蜡笔小新.png'),
                name3:'蜡笔小新',
            },{
                img1 : require('@/assets/images/video-clip/classify/短篇区.png'),
                title: '短篇区',
                img2 : require('@/assets/images/video-clip/classify/搞笑虫子无人岛.png'),
                name1:'搞笑虫子无人岛',
                img3 : require('@/assets/images/video-clip/classify/鸡皮和他的朋友.png'),
                name2:'鸡皮和他的朋友',
                img4 : require('@/assets/images/video-clip/classify/Gon的旱獭.png'),
                name3:'Gon的旱獭 第三季',
            },{
                img1 : require('@/assets/images/video-clip/classify/恋爱区.png'),
                title: '恋爱区',
                img2 : require('@/assets/images/video-clip/classify/谋爱上瘾.png'),
                name1:'谋爱上瘾 动态漫画',
                img3 : require('@/assets/images/video-clip/classify/纯情丫头休想逃.png'),
                name2:'纯情丫头休想逃 动态漫画',
                img4 : require('@/assets/images/video-clip/classify/高分少女.png'),
                name3:'高分少女',
            },{
                img1 : require('@/assets/images/video-clip/classify/偶像区.png'),
                title: '偶像区',
                img2 : require('@/assets/images/video-clip/classify/狐狸之声.png'),
                name1:'狐狸之声',
                img3 : require('@/assets/images/video-clip/classify/爱在西元前.png'),
                name2:'爱在西元前',
                img4 : require('@/assets/images/video-clip/classify/偶活学园.png'),
                name3:'偶活学园 第1季',
            }]
        }
    }
}
</script>