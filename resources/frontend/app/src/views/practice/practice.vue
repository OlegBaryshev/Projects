<template>
  <div class="practice-component">
    <mainHeader :onScrollChange="false"></mainHeader>
    <article class="controller-in-line-content">
       <sideBar :SelectedSlide="data_slide" @changeSlide="$event=>data_slide=$event.slide" :Course="Course"></sideBar>
        <section class="main-page-content">
            <header class="switch-controller">
                <article class="content-controller">
                    <aside class="left-side-component">
                        <nav class="navigation-controller __style-scrollbar">
                            <button class="switch-task-button"
                            v-for="(item,index) in this.data_course.list[this.data_slide].tasks" :key="index"
                            :class="{
                                '__Complete':item.isComplete,
                                '__Selected':data_task == index
                            }" @click="changeTask(index)"></button>
                        </nav>
                    </aside>
                    <aside class="right-side-component">
                        <nav class="menu-controller">
                            <!-- <button @click="chartClick()" class="controller-button-menu">
                                <i class='bx bx-chat'></i>
                            </button>
                            <button @click="chartClick()" class="controller-button-menu">
                                <i class='bx bx-cog' ></i>
                            </button> -->
                            <button class="Submit-controller-btn" @click="checkForm()" :disabled="isValid">Далее</button>
                        </nav>
                    </aside>
                </article>
            </header>
            <article></article>
            <section class="answer-form-controller">
                <article class="main-switch-components">
                    <div class="controller-position-elements task-section">
                        <practice_check v-if="checkTemplate()==1" ref="form-page"/>
                        <practice_code  v-else-if="checkTemplate()==2"  ref="form-page"/>
                        <practice_comparison  v-else-if="checkTemplate()==3"  ref="form-page"/>
                        <practice_select  v-else-if="checkTemplate()==4"  ref="form-page"/>
                        <practice_video  v-else-if="checkTemplate()==5"  ref="form-page"/>
                        <practice_question  v-else  ref="form-page"/>
                    </div>
                </article>
            </section>
        </section>
    </article>
</div>    
</template>

<script>
import footerSection from '@/components/sections/footer-section.vue';
import sideBar from '@/components/panels/sideBar_2.vue'

import mainHeader from '@/components/panels/main-header.vue';
import { WOW } from 'wowjs';

import practice_check from './practice_check.vue';
import practice_code from './practice_code.vue';
import practice_comparison from './practice_comparison.vue';
import practice_question from './practice_question.vue';
import practice_select from './practice_select.vue';
import practice_video from './practice_video.vue';

export default {
    components:{
        footerSection,
        mainHeader,
        sideBar,
        practice_check,
        practice_code,
        practice_comparison,
        practice_question,
        practice_select,
        practice_video
    },
    props:{
        Task:{
            default:0,
            type:Number,
            required:false
        },
        Slide:{
            default:0,
            type:Number,
            required:false
        },
        Course:{
            type:Object,
            default:{
                procent:null,
                list:[
                    {
                        title:'',
                        text:'',
                        type:null,
                        tasks:[
                            {
                                type:2,
                                title:'',
                                text:'Теперь мы знаем, что такое разметка, давай узнаем, что такое HTML. Есть вещи, которые проще показать, чем объяснить. <&%BR%> HTML - одна из них. Всё гениальное просто. Вот как бы выглядел текст этого урока на HTML:<&%BR%><&%SL%><h1>HTML</h1><p>Теперь мы знаем, что такое <i>разметка</i>, давай узнаем, что такое HTML. Есть вещи, которые проще показать, чем объяснять. HTML - одна из них.</p> <p>Всё гениальное просто. Вот как бы выглядел текст этого урока на HTML:</p><&%/SL%>',
                                isComplete:true
                            },
                            {
                                type:4,
                                title:'',
                                text:'',
                                isComplete:true
                            },
                            {
                                type:2,
                                title:'',
                                text:'',
                                isComplete:false
                            }
                        ],
                        lock:false
                    },
                    {
                        title:'',
                        text:'',
                        type:null,
                        tasks:[
                            {
                                type:2,
                                title:'',
                                text:'',
                                isComplete:false
                            }
                        ],
                        lock:false
                    },
                    {
                        title:'',
                        text:'',
                        type:null,
                        tasks:[
                            {
                                type:2,
                                title:'',
                                text:'',
                                isComplete:false
                            },
                        ],
                        lock:false
                    },
                    {
                        title:'',
                        text:'',
                        type:null,
                        tasks:[
                            {
                                type:2,
                                title:'',
                                text:'',
                                isComplete:true
                            }
                        ],
                        lock:true
                    }
                ]
            }
        }
    },
    data(){
        return{
            data_slide:this.Slide,
            data_task:this.Task,
            data_course:this.Course
        }
    },
    watch:{
        'data_slide':{
            immediate: true, 
            handler(val){
                this.data_task = 0;
            },
            deep: true
        }
    },
    created() {
    },
    mounted(){
        new WOW().init();
    },
    methods:{
        checkTemplate(){
            return this.data_course.list[this.Slide].tasks[this.data_task].type
        },
        checkForm(event){
            let form = this.$refs['form-page'][this.checkTemplate()];
            this.data_course.list[this.Slide].tasks[this.data_task].isComplete = form
        },
        chartClick(){

        },
        settingsClick(){

        },
        changeTask(index){
            this.data_task = index;
        },
        checkLink(link){
            let l = String(link);
            if (this.isBlank(l)) this.$router.push(l.startsWith("/")?`/${l}`:l)
        },
        isBlank(str) {
            return (str && !/^\s*$/.test(str));
        },
    }
}
</script>

<style scoped lang="scss">
    .Submit-controller-btn{
        padding: 0.3vmax 0.5vmax;
        font-size: 1vmax;
        background: var(--main-color);
        color: var(--theme_2);
        border-radius: var(--standard-border-radius);
        &:disabled{
            filter: grayscale(100%);
            background: var(--theme_1);
        }
    }
    .controller-button-menu{
        line-height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.1vmax;
        background: transparent;
        transition: color 0.1s linear;
        width: 1em;
        height: 1em;
        font-size: 1.4vmax;
        &:hover{
            color: var(--main-color);   
        }
    }
    .practice-component{
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        .controller-in-line-content{
            width: 100%;
            display: flex;
            position: relative;
            .main-page-content{
                --nav-header:4vmax;
                --windows-padding-gap:.7vmax;
                padding-top:var(--header-height);
                display: flex;
                flex-direction: column;
                width: 100%;
                overflow: auto;
                .switch-controller{
                    width: 100%;
                    height: 4vmax;
                    display: flex;
                    align-items: center;
                    padding: var(--windows-padding-gap);
                    .content-controller{
                        height: 100%;
                        width: 100%;
                        background: var(--theme_2);
                        border-radius: var(--standard-border-radius);
                        box-shadow: 0 0 var(--windows-padding-gap) rgba(0, 0, 0, 0.2);
                        padding: 0 0.6vmax;
                        display: flex;
                        gap: 0.5vmax;
                        align-items: center;
                        justify-content: space-between;
                        .right-side-component{
                            margin-left: auto;
                            display: flex;
                            align-items: center;
                            .menu-controller{
                                display: flex;
                                gap: 0.1vmax;
                            }
                        }
                        .left-side-component{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            .navigation-controller{
                                --btn-size:1.3vmax;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                gap: 0.5vmax;
                                overflow-x: auto;
                                .switch-task-button{
                                    width: var(--btn-size);
                                    height: var(--btn-size);
                                    background: var(--theme);
                                    border-radius: var(--standard-border-radius);
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    transition:border-radius 0.2s linear,filter 0.2s linear;
                                    &.__Selected{
                                        filter:hue-rotate(5deg) contrast(110%) brightness(110%);
                                        border-radius: 100%;
                                    }
                                    &.__Complete{
                                        background: var(--main-color);
                                    }
                                }
                            }
                        }
                    }
                }
                .answer-form-controller{
                    min-height:calc(100% - var(--nav-header));
                    width: 100%;
                    .main-switch-components{
                        width: 100%;
                        height: 100%;
                        border-radius: var(--standard-border-radius);
                        padding: var(--windows-padding-gap);
                        padding-top: 0;
                        display: flex;
                        flex-direction: column;
                        .controller-position-elements{
                            width: 100%;
                            height: 100%;
                            display: flex;
                        }
                    }
                }
                .main-switch-components{
                    width: 100%;
                    padding-top: var(--header-height);
                    display: flex;
                }
            }
        }
        
    }
</style>