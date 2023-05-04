<template>
  <section class="controller-log-in">
    <mainHeader :onScrollChange="false"></mainHeader>
    <article class="controller-back-elements">

    </article>
    <article class="controller-front-elements">
      <signInSection class="controller-login-section"></signInSection>
    </article>
  </section>
</template>

<script>
import signInSection from '@/components/forms/sign-up-forms/sign-in-form.vue'
import mainHeader from '@/components/panels/main-header.vue';
export default {
  components:{
    signInSection,
    mainHeader
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  .controller-log-in{
    background: linear-gradient(45deg,transparent 50%,var(--theme) 50%),
    linear-gradient(75deg,var(--theme_3) 0%,transparent 50%) ; 
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .controller-log-in .controller-back-elements{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    z-index: 1;
  }
  .controller-log-in .controller-front-elements{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 2;
    backdrop-filter: blur(0.3vmax);
  } 
</style>