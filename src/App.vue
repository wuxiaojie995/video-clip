<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  name : 'app',
  components : {
    Header,
    Footer
  }
}
</script>
<style scoped>
@import './assets/css/public.css';
</style>