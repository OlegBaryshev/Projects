<template>
  <section class="controller-video-section">
    <h2 class="controller-video-title">
        {{ data_title }}
    </h2>
    <p class="controller-video-text">
        {{ data_text }}
    </p>
    <video src=""></video>
  </section>
</template>

<script>
export default {
    props:{
        title:{
            default:'',
            type:String,
            required:true,
        },
        text:{
            default:'',
            type:String,
            required:false
        },
        video_src:{
            default:'',
            type:String,
            required:true
        },
    },
    data(){
        return{
            data_title:this.title,
            data_text:this.text
        }
    }
}
</script>

<style>

</style>