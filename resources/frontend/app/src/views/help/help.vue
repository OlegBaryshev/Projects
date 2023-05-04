<template>
  <div class="controller-help-page">
    <mainHeader></mainHeader>
    <div class="controller-screen-section">
        <section class="search-section">
            <form action="">
                <article class="center-content">
                    <fieldset class="controller-text-position">
                        <span class="span-controller-text" >Введите ваш вопрос:</span>
                        <label class="label-search-controller">
                            <div class="search-icon-element">
                                <i class='bx bx-search' ></i>
                            </div>
                            <input ref="search-element" class="search-input" v-model="search_form.request" placeholder="Поиск" type="text">
                        </label>
                    </fieldset>
                </article>
            </form>
        </section>
        <section class="help-info-content">

        </section>
        <section class="main-help-section">
            <article class="content-controller-article">
                <ul class="cards-list-controller">
                    <li class="cards-controller-element wow animate__animated animate__fadeIn" :data-wow-delay="`${0.2 * index}s`"
                    v-for="(item,index) in data_helpCards.list" 
                    :key="index"
                    @click="this.$router.push(item.link)">
                        <article class="controller-center-content">
                            <h4 class="controller-help-title"> {{ item.title }}</h4>
                            <p>{{ item.text }}</p>
                        </article>
                    </li>
                </ul>
            </article>
        </section>
        <footerSection></footerSection>
    </div>
  </div>
</template>

<script>
'use strict';
import footerSection from '@/components/sections/footer-section.vue';
import mainHeader from '@/components/panels/main-header.vue';
import {WOW} from 'wowjs';
export default {
  components:{
    mainHeader,
    footerSection
  },
  mounted(){
    new WOW().init();
  },
  props:{
    helpCards:{
        default:{
            list:[
                {
                    title:'Справочный центр для учащихся',
                    text:'',
                    link: '/',
                },
                {
                    title:'Справочный центр для преподавателей',
                    text:'',
                    link: '/',
                },
                {
                    title:'Стравочный центр для организаций',
                    text:'',
                    link: '/',
                }
            ]
        },
        type:Object
    }
  },
  data(){
    return{
        search_form:{
            request:''
        },
        data_helpCards:this.helpCards
    }
  }
}
</script>

<style lang="scss" scoped>
.controller-screen-section{
    width:100%;
    min-height: 100vh;
    .help-info-content{
        --animation-speed: 0.3s;
        display: flex;
        transition: var(--animation-speed) linear height,
        var(--animation-speed) linear padding-top,
        var(--animation-speed) linear padding-bottom;
        &:not(:empty){
            padding: var(--page-padding);
        }
    }
    .main-help-section{
        display: flex;
        padding: 0 var(--page-padding);
        min-height: 20vmax;
        width: 100%;
        justify-content: center;
        align-items: center;
        .content-controller-article{
            display: flex;
            justify-content: center;
            width: 100%;
            .cards-list-controller{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                gap: 1vmax;
                .cards-controller-element{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: var(--standard-border-radius);
                    background: var(--theme_2);
                    height: 100%;
                    min-height: 10vmax;
                    min-width: 25vw;
                    cursor: pointer;
                    transition: filter 0.2s ease-in-out;
                    &:hover{
                        filter: brightness(110%);
                        &:active{
                            filter: brightness(95%);
                        }
                    }
                    .controller-center-content{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        padding: 1vmax 1.5vmax;
                        border-radius: var(--standard-border-radius);
                        .controller-help-title{
                            color: var(--main-color);
                        }
                    }
                }
            }
        }
    }
    .search-section{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        min-height: 20vw;
        padding: var(--header-height) var(--page-padding);
        background: var(--main-color);
        .center-content{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            .controller-text-position{
                flex-direction: column;
                display: flex;
                width: 100%;
                justify-content: center;
                gap: 0.5vmax;
                .span-controller-text{
                    font-size: 1vmax;
                    color: var(--theme_2);
                }
                .label-search-controller{
                    --input-height:3vmax;
                    display: flex !important;
                    height: var(--input-height);
                    padding: 0 calc(1vmax + var(--standard-border-radius));
                    background: var(--theme_2);
                    border-radius: var(--standard-border-radius);
                    width: 100%;
                    min-width:30vw;
                    max-width: 50vw;
                    gap: 0.5vmax;
                    .search-icon-element{
                        height: var(--input-height);
                        display: flex;
                        font-size: 1.5vmax;
                        align-items: center;
                        justify-content: center;
                        padding-top: 0.05em;
                        line-height: 0%;
                        cursor: pointer;
                    }
                    .search-input{
                        display: flex;
                        width: 100%;
                        font-size: 1vmax;
                    }
                }
            }
        }
    }
}
</style>