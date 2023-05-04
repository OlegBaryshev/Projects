<template>
  <div class="page-controller-press">
    <mainHeader></mainHeader>
    <section class="press-main-section" :class="{
        '__Active':isTopScroll
    }">
        <div class="back-content">
            <div class="position-fixed-video">
                <!-- <video :src="require('@/views/press/mainVideo/fb23a195-4822-4688-9809-db1609ae29c9.mp4')" 
                :poster="require('@/views/press/mainVideo/5cfaedc7-88f4-415e-89d0-dd28af114b0f.jpg')" 
                class="main-video" 
                loop 
                autoplay 
                playsinline 
                x5-playsinline="true"
                webkit-playsinline="true"
                x5-video-player-fullscreen="true"
                ></video> -->
            </div>
        </div>
        <div class="front-content">
            <article class="controller-front-text">
                <div class="text-controller">
                    <h2 class="main-title-container wow animate__animated animate__fadeIn" data-wow-delay="0s">Пресса</h2>
                    <p class="main-text-container wow animate__animated animate__fadeIn" data-wow-delay="0.5s">Go-Learn.com — платформа для создания и размещения онлайн-курсов. Платформа позволяет создавать интерактивные обучающие уроки, используя видео, тексты и разнообразные задачи с автоматической проверкой и моментальной обратной связью.</p>
                </div>
                <fieldset class="controller-social-media">
                    <button class="social-media-btn  wow animate__animated animate__fadeIn" data-wow-delay="0.7s">
                        <i class='bx bxl-vk'></i>
                    </button>
                    <button class="social-media-btn  wow animate__animated animate__fadeIn" data-wow-delay="0.9s">
                        <i class='bx bxl-discord-alt'></i>
                    </button>
                    <button class="social-media-btn  wow animate__animated animate__fadeIn" data-wow-delay="1.1s">
                        <i class='bx bxl-telegram'></i>
                    </button>
                    <button class="social-media-btn  wow animate__animated animate__fadeIn" data-wow-delay="1.3s">
                        <i class='bx bxl-youtube' ></i>
                    </button>
                    <button class="social-media-btn  wow animate__animated animate__fadeIn" data-wow-delay="1.5s">
                        <i class='bx bxl-instagram-alt'></i>
                    </button>
                </fieldset>
            </article>
        </div>
    </section>
    <article class="more-content-controller">
        <section class="press-info-card">
            <article class="cards-controller">
                <ul class="controller-cards">
                    <li class="controller-card-element  wow animate__animated animate__fadeIn" :data-wow-delay="`${0.2 * index}s`" v-for="(item,index) in this.data_infoCards.list" :key="index">
                        <article class="card-content-controller">
                            <div class="title-container">
                                <h3 class="card-title">{{ item.title }}</h3>
                            </div>
                            <div class="content-container">
                                <div class="card-text" v-html="item.html_text"></div>
                            </div>
                        </article>
                    </li>
                </ul>
            </article>
        </section>
        <footerSection></footerSection>
    </article>
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
  mounted() {
      new WOW().init();
      this.initEvents()
  },
  props:{
    infoCards:{
        type:Object,
        default:{
            list:[
                {
                    title:"Логотип",
                    html_text:'Вы можете использовать логотип Go-learn в материалах статей, в соответствии с соблюдением авторских прав. Для вашей команды дизайнеров мы подготовили подробный гайд по айдентике и логотип в разных форматах.'
                },
                {
                    title:"Интервью",
                    html_text:'Договориться об интервью Stepik.org, участии в мероприятиях и выступлениях на конференциях, можно, оставив запрос по почте BarMan.oleg2005@yandex.com'
                },
                {
                    title:"Контактная информация",
                    html_text:'Остались вопросы? Ответы могут быть на <router-link to="/help">Help Center</router-link>.Или задавайте их на www.Go-Learn.com.'
                }
            ]
        },
    }
  },
  data(){
    return{
        data_infoCards:this.infoCards,
        data_onScrollChange:true,
        isTopScroll:true
    }
  },
  methods:{
    initEvents(){
        if(this.data_onScrollChange){
            function checkScroll(currentScroll){
                return currentScroll <= 15;
            }
            let prevScroll = window.pageYOffset;
            let currentScroll;
            this.isTopScroll = checkScroll(prevScroll);
            window.addEventListener('scroll', (e) => {
                currentScroll = window.pageYOffset;
                this.isTopScroll = checkScroll(currentScroll)
                prevScroll = currentScroll;
            });
        }
    },
  }
}
</script>

<style lang="scss" scoped>
    .press-main-section{
        --press-section-padding:1vmax;
        --section-height:calc(100vh - 15vw);
        --min-height:40vw;
        --max-height:100vh;

        height: var(--section-height);
        min-height: var(--min-height);
        max-height: var(--max-height);
        position: relative;
        display: flex;
        transition: height 0.2s linear;
        &.__Active{
            transition: height 0.5s linear;
            height: var(--max-height);
        }
        .back-content{
            .position-fixed-video{
                position: fixed;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }
        }
        .front-content{
            top: 0;
            left: 0;
            display: flex;
            position: absolute;
            align-items: center;
            width: 100%;
            height: 100%;
            &::before{
                content: '';
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                height: 100%;
                background: var(--main-color);
                opacity:1;
                z-index: -1;
            }
            .controller-front-text{
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 2vmax;
                .text-controller{
                    min-width: 40%;
                    max-width: 60%;
                    width: 60vw;
                    display: flex;
                    gap: 1vmax;
                    flex-direction: column;
                    font-size: 1.2vmax;
                    color: var(--theme_2);
                    .main-title-container{
                        font-size: 3vmax;
                    }
                }
                .controller-social-media{
                    display: flex;
                    gap: 1vmax;
                    .social-media-btn{
                        background: transparent;
                        color:var(--theme_2)
                    }

                }
            }
        }
    }
    .more-content-controller{
        width: 100%;
        .press-info-card{
            padding:0 var(--page-padding);
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            .controller-cards{
                display: flex;
                justify-content: space-around;
                gap: 1vw;
                flex-wrap: wrap;
                .controller-card-element{
                    display: flex;
                    width: 30%;
                    min-width: 20vmax;
                    gap: 1vmax;
                    flex-direction: column;
                    &:hover{
                        .card-content-controller{
                            transform: translateY(-5%);
                        }
                    }
                    .card-content-controller{
                        transition: transform 0.1s linear;
                        color: var(--text-color);
                        background: var(--theme_2);
                        height: 100%;
                        padding:calc(var(--standard-border-radius) + 1vmax);
                        padding-top: 0;
                        border-radius: var(--standard-border-radius);
                        .title-container{
                            width: 100%;
                            padding: 1vmax 0;
                            border-bottom: 0.2vmax solid var(--main-color);
                            color: var(--main-color);
                            font-weight: bolder;
                            font-size: 1.5vmax;
                        }
                        .content-container{
                            padding: 1vmax 0;
                        }
                    }
                }
            }
        }
    }
</style>