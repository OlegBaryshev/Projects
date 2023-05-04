<template>
  <div class="profile-page">
    <mainHeader/>
    <article class="controller-front-content">
        <section class="controller-main-content">
            <form action="" class="form-controller-content">
                <section class="controller-profile-avatar">
                    <article class="profile-image">
                        <div class="controller-image-profile">
                            <div class="controller-image-edit">
                                <button class="controller-edit-button">
                                    <i class='bx bxs-edit-alt'></i>
                                </button>
                            </div>
                        </div>
                    </article>
                    <article class="form-controller-profile">
                            <article class="inline-form-content">
                                <!--user-name-->
                                <fieldset class="profile-form-element">
                                    <label class="controller-user-data-label" @click="$event=>this.$refs['user-name-input'].focus()">Имя</label>
                                    <span @input="e => user_data.user_name = e.target.innerText" 
                                    class="input-span __style-scrollbar" 
                                    ref="user-name-input"
                                    contenteditable>
                                        {{ user_data.user_name }}
                                    </span>                        
                                </fieldset>
                                <!--user-surname-->
                                <fieldset class="profile-form-element">
                                    <label class="controller-user-data-label" @click="$event=>this.$refs['user-surname-input'].focus()">Фамилия</label>
                                    <span @input="e => user_data.user_surname = e.target.innerText" 
                                    class="input-span __style-scrollbar" 
                                    ref="user-surname-input"
                                    contenteditable>
                                        {{ user_data.user_surname }}
                                    </span>                        
                                </fieldset>
                                <fieldset class="profile-form-element">
                                    <label class="controller-user-data-label" @click="$event=>this.$refs['user-lastname-input'].focus()">Отчество</label>
                                    <span @input="e => user_data.user_lastname = e.target.innerText" 
                                        class="input-span __style-scrollbar" 
                                        ref="user-lastname-input"
                                        contenteditable>
                                        {{ user_data.user_lastname }}
                                    </span>                        
                                </fieldset>
                            </article>
                        </article>
                    </section>
                <section class="controller-under-content">
                    <fieldset class="inline-element-controller">
                        <!--user-lastname-->
                        <fieldset class="profile-form-element">
                            <label class="controller-user-data-label" @click="$event=>this.$refs['user-lastname-input'].focus()">Отчество</label>
                            <input type="email" >                      
                        </fieldset>
                        <fieldset class="profile-form-element">
                            <label class="controller-user-data-label" @click="$event=>this.$refs['user-lastname-input'].focus()">Отчество</label>
                            <input type="tel" >                      
                        </fieldset>
                    </fieldset>
                    <article class="controller-cintainer-info">
                        <fieldset class="controller-amout-me profile-form-element">
                            <label class="About-me-label controller-user-data-label">Обо мне</label>
                            <textarea class="controller-text-area __style-scrollbar" name=""></textarea>
                        </fieldset>
                    </article>
                </section>               
            </form>
        </section>
        <section class="controller-news-content">
            <nav class="course-controller">
                <article class="course-controller-element">
                    
                </article>
            </nav>
        </section>
        <section class="statistic-section">
            <article class="controller-usage-statistic">
                
            </article>
            <article class="controller-usage-charts">
                <article class="controller-chart-line">
                    <!-------------Графики------------->
                    <!--График-посещения-пользователя-->
                    <section class="controller-chart-section">
                        <article class="chart-title-controller">
                            <h2 class="chart-title"></h2>
                        </article>
                        <div class="chart-controller">

                        </div>
                        <fieldset class="buttons-controller">
                            <custom-select class="chart-date"/>
                            <custom-select class="chart-type"/>
                        </fieldset>
                    </section>
                    <!--График-выполнения-курсов-->
                    <section class="controller-chart-section">
                        <article class="chart-title-controller">
                            <h2 class="chart-title"></h2>
                        </article>
                        <div class="chart-controller">

                        </div>
                        <fieldset class="buttons-controller">
                            <custom-select class="chart-date"/>
                            <custom-select class="chart-type"/>
                        </fieldset>
                    </section>
                </article>
                <fieldset>
                    <!--График-выкладывания-курсов-->
                    <section class="controller-chart-section">
                        <article class="chart-title-controller">
                            <h2 class="chart-title"></h2>
                        </article>
                        <div class="chart-controller">

                        </div>
                        <fieldset class="buttons-controller">
                            <custom-select class="chart-date"/>
                            <custom-select class="chart-type"/>
                        </fieldset>
                    </section>
                    <!--График-помощи-->
                    <section class="controller-chart-section">
                        <article class="chart-title-controller">
                            <h2 class="chart-title"></h2>
                        </article>
                        <div class="chart-controller">

                        </div>
                        <fieldset class="buttons-controller">
                            <custom-select class="chart-date"/>
                            <custom-select class="chart-type"/>
                        </fieldset>
                    </section>
                </fieldset>
            </article>
        </section>
    </article>
  </div>
</template>

<script>
import customSelect from '@/components/elements/customSelect.vue'
import mainHeader from '@/components/panels/main-header.vue';
export default {
    components:{
        mainHeader,
        customSelect
    },
    props:{
        user_name:{
            type:String,
            default:''
        },
        user_surname:{
            type:String,
            default:''
        },
        user_lastname:{
            type:String,
            default:''
        },
    },
    data(){
        return{
            user_data:{
                user_name:this.user_name,
                user_surname:this.user_surname,
                user_lastname:this.user_lastname
            }
        }
    },
    mounted(){

    },
    methods: {
        
    },
    watch:{
        user_data(before, after){

        }
    }
}
</script>

<style lang="scss" scoped>
    .controller-image-profile .controller-image-edit{
        --edit-btn-size:2vmax;
        display: flex;
        height: var(--edit-btn-size);
        width: var(--edit-btn-size);
        border-radius: 100%;
        position: absolute;
        justify-content: center;
        align-items: center;
        opacity: 0;
        top: calc(100% - var(--edit-btn-size));
        left: calc(100% - var(--edit-btn-size));
        transition: 0.5s ease-out opacity;
        background: var(--theme_2);
        color: var(--theme_2);
        &:hover .controller-image-edit{
            opacity: 1;
        }
    }  
    .inline-element-controller{
        display: flex;
        width: 100%;
        gap: 1vmax;
    } 
    .profile-form-element{
        display: flex;
        flex-direction: column;
        gap: 0.5vmax;
    }
    .input-span{
        min-height: 1em;
        min-width: 10vw;
        max-width: 50vw;
        width: 100%;
        background: var(--theme_2);
        padding: 0.5vmax 1vmax;
        border-radius: 0.2vmax;
        box-shadow: 0 0 0.5vmax 0 rgba(0, 0, 0, 0.2);
        max-height: 10vmax;
        overflow-y: auto;
    }
    .controller-user-data-label{
        font-size: 1.1vmax;
        color: var(--reverse);
        font-weight: bolder;
    }
    .controller-front-content{
        min-height: 100vh;
        width: 100%;
        padding:0 var(--page-padding);
        padding-top: var(--header-height);
        .inline-form-content{
            display: flex;
            flex-direction: column;
            gap: 1vmax;
        }
        .controller-main-content{
            background: var(--theme_2);
            padding:2vmax;
            border-radius: var(--standard-border-radius);
            color:var(--reverse);
        }
    }
    .form-controller-profile{
        display: flex;
        width: 50vw;
        flex-direction: column;
    }
    .controller-under-content{
        width: 100%;
        height: auto;
        padding: 1vmax 0;
        display: flex;
        .controller-text-area{
            width: 100%;
            height: 20vmax;
            resize:none;
            background: var(--theme_2);
            padding: 0.5vmax 1vmax;
            border-radius: 0.2vmax;
            box-shadow: 0 0 0.5vmax 0 rgba(0, 0, 0, 0.2);
            font-size: 1.3vmax;
        }
    }
</style>