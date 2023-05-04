<template>
  <section class="controller-debug-section">
    <testSection></testSection>
  </section>
</template>

<script>
import testSection from '@/components/logo/loading-section.vue'
export default {
  components:{
    testSection
  }
}
</script>

<style>
    .controller-debug-section{
        display: flex;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        flex-direction: column;
    }
</style>