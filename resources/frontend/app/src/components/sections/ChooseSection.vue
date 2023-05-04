<template>
  <section class="controller-choose-section">
    <article class="controller-slider-content" v-for="(slide,index) in this.chunks(slides)" :key="index">
        <article 
        class="controller-slide-content" 
        v-for="(card,i) in slide.list" 
        :key="i">
            <div class="card-view" :style="{
                '--selfIndex':`${index*data_settings.chankNumber + i} !important`
            }">
                <article class="back-card-content">
                </article>
                <h3 class="controller-card-title"></h3>
            </div>
        </article>
    </article>
  </section>
</template>

<script>
export default {
    props:{
        settings: {
            type:Object,
            default:{
                chankNumber:3
            }
        }
    },
    data(){
        return{

        }
    },
    watch:{

    },
    methods:{
        chunks(){
            return []
        }
    }
}
</script>

<style>
    .controller-slide-content{
        --card-width:33vw;
        --card-height:100%;
        --offset:1vw;
        --card-border-radius:var(--offset);
        max-width:var(--card-width);
        width: 100%;
        max-height:var(--card-height);
        height: 100%;
        display: inline-flex;
        position: relative;
    }
    .card-view{
        width: 100%;
        height: 100%;
        border-top-right-radius:var(--card-border-radius);
        border-bottom-right-radius:var(--card-border-radius);
        display: flex;
        flex-direction: column;
    }
    .controller-slider-content{
        overflow: hidden;
        width: 100%;
        padding: 10vmax var(--page-padding);
        height: 60vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>