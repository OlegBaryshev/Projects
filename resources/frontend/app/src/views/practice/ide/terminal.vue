<template>
  <section class="terminal-controller">
    <ide-header :isFullscreen="this.isFullscreen" :title="'Терминал'" @fullScreen="$event=>isFullscreen=$event.status"></ide-header>
    <div class="layout-terminal">
        <article class="controller-terminal-result">
            <div class="controller-line"></div>
        </article>
        <form @submit.prevent class="controller-input-form">
            <input type="text" class="controller-input">
        </form>
    </div>
  </section>
</template>

<script>
import ideHeader from '@/views/practice/ide/ide-header.vue'
export default {
    components:{
        ideHeader
    },
    data(){
        return{
            isFullscreen:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .terminal-controller{
        box-shadow:0 0 0.2vmax rgba(0, 0, 0, 0.157);
        height: 100%;
        .layout-terminal{
            width: 100%;
            height: 100%;
            .controller-input-form{
                --standard-form-border:0.1vmax;
                --form-padding:1vmax;
                width: 100%;
                padding: 0 var(--form-padding);
                padding-bottom: var(--form-padding);
                display: flex;
                justify-content: center;
                align-items: center;
                .controller-input{
                    border-top: var(--standard-form-border);
        
                }
            }
        }
    }
</style>