<template>
  <section class="practice-check">
    <form action="">
        <h2 class="controller-title-element">{{ data_title }}</h2>
        <div class="controller-text-element">{{ data_text }}</div>
        <template v-if="data_type==1 || answers.list.filter(el=>el.isTrue).length == 1">
            <article class="content-element radio-component">
                
            </article>
        </template>
        <template v-else>
            <article class="content-element radio-component">
    
            </article>
        </template>
    </form>
  </section>
</template>

<script>
export default {
    props:{
        type:{
            default:1,
            type:String,
            required:true,
        }
    },
    data(){
        return{
            data_type:this.type,
            data_text:this.text,
            data_title:this.title,
            answers:{
                list:[
                    {
                        isTrue:true,
                        title:'',
                        text:''
                    }
                ]
            }
        }
    }
}
</script>

<style>
    .practice-check{
        width: 100%;
        height: 100%;
        border-radius: var(--standard-border-radius);
        display: flex;
        background: var(--theme_2);
    }
</style>