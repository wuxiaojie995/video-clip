<template>
    <div id="main">
        <Carousel/>
        <Content/>
        <TV/>
        <Idol/>
        <Preview/>
        <Classify/>
    </div>
</template>
<script>
import Carousel from '@/views/video-clip/Carousel.vue'
import Content from '@/views/video-clip/Content.vue'
import TV from '@/views/video-clip/TV.vue'
import Idol from '@/views/video-clip/Idol.vue'
import Preview from '@/views/video-clip/Preview.vue'
import Classify from '@/views/video-clip/Classify.vue'
export default {
    name : 'v-video',
    components:{
        Carousel,
        Content,
        TV,
        Idol,
        Preview,
        Classify
    }
}
</script>
<style scoped>
@import '~@/assets/css/video.css';
</style>