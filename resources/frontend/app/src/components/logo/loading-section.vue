<template>
  <section class="loading-section">
    <article class="loading-content">
        <logo class="logo-controller"></logo>
        <div class="loading-controller-bar">
            <loadingBar></loadingBar>
        </div>
    </article>
  </section>
</template>

<script>
import loadingBar from "@/components/logo/loading-bar.vue"
import logo from "@/components/logo/logo.vue"
export default {
    components:{
        loadingBar,
        logo
    }
}
</script>

<style>
    .loading-section{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--reverse_2);
        height: 100vh;
        width: 100vmax;
    }
    .loading-content{
        display: flex;
        flex-direction: column;
        gap: 1vmax;
        justify-content: center;
        align-items: center;
    }
    .logo-controller{
        --logo-size:6.5vmax;
        width:var(--logo-size);
        height: var(--logo-size);
        animation:animate_logo_start 1s ease-in;
    }
    @keyframes animate_logo_start {
        0%{
            opacity: 0;
        }
        25%{
            opacity: 0.7;
        }  
        50%{
            filter: contrast(120%);   
            opacity: 1;
        }
        100%{
            filter: brightness(100%);
        }
    }
    
    .loading-controller-bar{
        width: 10vmax;
        height: 2vmax;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
    }
    
</style>