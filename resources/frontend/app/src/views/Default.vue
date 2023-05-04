<template>
    <div id="auth-layout" class="auth-layout" ref="auth-layout">
        <mainHeader></mainHeader>
        <div class="controller-content">
            <router-view />
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
    mounted() {
        new WOW().init();
    }
}
</script>
  
<style lang="scss" scoped></style>