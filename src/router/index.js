import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '@/views/video-clip/Video.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[{
    path:'/',
    name : 'video',
    component : Video,
    meta: { 
      title : '动漫'
    }
  }]
})

export default router
