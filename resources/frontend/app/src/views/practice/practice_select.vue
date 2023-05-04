<template>
  <section class="controller-select-section">
    <article class="controller-select-container">
        <article class="question-article-controller">
            <h2 class="title-controller" v-if="data_title">{{ data_title }}</h2>
            <p class="text-controller" v-if="data_text">
                {{ data_text }}
            </p>
        </article>
        <article class="list-content-container">
            <ul class="cards-list-controller ">
                <li class="card-component-controller" v-for="(item,index) in data_elements" :key="index">
                    <div class="controller-data-card">
                        <div class="">
                            <input type="checkbox"/>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
    </article>
  </section>
</template>

<script>
export default {
    props:{
        isRadio:{
            required:true,
            default:false,
            type:Boolean
        },
        title:{
            default:'',
            required:true,
            type:String
        },
        text:{
            default:'',
            required:false,
            type:String
        },
        elements:{
            default:[],
            required:true,
            type:String
        },
        answers:{
            default:[],
        }
    },
    data(){
        return{
            data_isradio:this.isRadio,
            data_title:this.title,
            data_text:this.text,
            data_elements:this.elements,
            data_answers:this.answers
        }
    },
    mounted(){

    },
    watch:{

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>