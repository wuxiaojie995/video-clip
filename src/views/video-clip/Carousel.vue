<template>
    <div class="carousel">
        <div class="picture"  v-for="(items, inde) in photo" :key="inde">
            <a href="javascript:;"><img :src="items.imgurl"></a>
        </div>
        <div class="picture fone" >
            <ul>
                <li id="name" v-for="(item, index) in text" :key="index">
                    {{item.name}}
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            timer: 0,
            photo:[{
                imgurl : require('@/assets/images/video-clip/轮播1.jpg'),
            },{
                imgurl : require('@/assets/images/video-clip/轮播2.jpg'),
            },{
                imgurl : require('@/assets/images/video-clip/轮播3.jpg'),
            },{
                imgurl : require('@/assets/images/video-clip/轮播4.jpg'),
            }],
            text:[{
                name : '修罗剑尊',
            },{
                name : '被迫成为反派赘婿',
            },{
                name : '都市仙王',
            },{
                name : '氪金玩家',
            }]
        }
    },
    mounted: function(){
        var len = $(".picture").find("a");
        var fone = $(".fone").find("li");
        var pos = 0;
        fone.eq(pos).css("color","white")
		setInterval(function(){
			len.eq(pos).hide();//隐藏元素
            fone.eq(pos).css("color","gray");
            pos++;//变量值加1
            if(pos == len.length) pos=0;//变量值重新定义为0
            len.eq(pos).show();//显示元素
            if(pos == fone.length) pos=0;
            fone.eq(pos).css("color","white")
	    },3000);//每隔3秒钟切换元素
    }
}
</script>