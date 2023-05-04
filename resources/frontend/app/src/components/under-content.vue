<template>
    <section class="controller-under-content">
        <article class="controller-left-content">
            <nav class="controller-social-media">
                <button class="controller-btn-social-media" v-for="(item,index) in socialMedia.list" :key="index"></button>
            </nav>
        </article>
        <article class="controller-right-content">
            <nav class="controller-slider-navigation">
                <button class="circle-button slider-cpntroller"></button>
            </nav>
        </article>
    </section>
</template>

<script>
export default {
    data(){
        return{
            socialMedia:{
                list:[
                    {
                        icon:'',
                        link:''
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>