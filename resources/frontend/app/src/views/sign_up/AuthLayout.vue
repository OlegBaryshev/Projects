<template>
  <div id="auth-layout" class="auth-layout" ref="auth-layout">
    <mainHeader :onScrollChange="false"></mainHeader>
    <div class="content-controller">
      <router-view/>
    </div>
  </div>
</template>

<script>
import footerSection from '@/components/sections/footer-section.vue';

import mainHeader from '@/components/panels/main-header.vue';
import { WOW } from 'wowjs';
export default {
    name: 'HomeView',
    components: {
        mainHeader,
        footerSection
    },
    mounted(){
        new WOW().init();
    }
}
</script>

<style>

</style>