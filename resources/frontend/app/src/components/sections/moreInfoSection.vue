<template>
  <section class="controller-more-info-section">
    <article class="main-content-controller">
        <article class="center-controller-section">
            <section class="left-side-controller-content">
                <article class="controller-main-text">
                    <h1 class="main-section-title"><span class="more-scale-controller">О</span>
                        <i class='bx bx-right-arrow-alt'></i>
                    <br/>Будущем</h1>
                </article>
                <article class="controller-text-gradient">
                    <div class="text-content-element">
                        <p class="info-text">
                            На 2023 год в бизнесс-план заложена реализация<br/>
                            5 проектов и сотрудничество с +5 компаний<br/>
                            - для разширения зоны охвата площадок<br/>
                            продвижения наших услуг
                        </p>
                    </div>
                    <article class="controller-procent-element">
                        <h2 class="controller-procent-text">45%</h2>
                        <p class="more-text-controller">Общий рост <br/>компании за<br/> 2023 год.</p>
                    </article>
                </article>
            </section>
            <section class="right-side-controller-content">
                <article class="back-content-controller">
                    <div class="controller-circle-content">
                        <section class="absolute-circle-controller  wow animate__animated animate__slideInRight" 
                         ref="target-circle" >

                        </section>
                    </div>
                </article>
                <article class="front-content-controller">
                    <section class="controller-statistics-group">
                        <article class="controller-front-content">
                                <div class="controller-statistics right-side wow animate__animated animate__slideInRight" data-wow-delay="0.4s">
                                    <h2 class="main-card-statistic">1400</h2>
                                    <h3 class="more-title-controller">Клиентов</h3>
                                </div>
                            <div class="controller-statistics left-side wow animate__animated animate__slideInLeft" data-wow-delay="0.2s">
                                <h2 class="main-card-statistic">1400</h2>
                                <h3 class="more-title-controller">Клиентов</h3>
                            </div>
                            <div class="controller-statistics right-side wow animate__animated animate__slideInRight" data-wow-delay="0.6s">
                                <h2 class="main-card-statistic">1400</h2>
                                <h3 class="more-title-controller">Клиентов</h3>
                            </div>
                        </article>
                    </section>
                </article>
            </section>
        </article>
        <section class="controler-social-media">
            <article class="controller-left-content">
                <ul class="controller-social-media-group">
                     <li class="">
                         <a href="">
                             
                         </a>
                     </li>
                </ul>
            </article>
        </section>
    </article>
  </section>
</template>

<script>
import BlobsScene from '@/assets/scripts/3dElements.js';
import {WOW} from 'wowjs';
export default {
    data(){
        return{
            scene:{
              settings:{
                speed: 0.2,
                density: 1.7,
                strength: 0.25,
                frequency: 1.0,
                amplitude: 1.0,
                intensity: 13.0,
                br:{a:0.7,b:0.7,c:0.5},
                c:{a:0.8,b:0.5,c:0.5},
                o:{a:0.1,b:0.2,c:0.1},
                p:{a:0.2,b:0.2,c:0.2},
                op:1,
                position:{
                  x:-1.6,
                  y:0.1,
                  z:0
                },
                mesh:{
                  size:1,
                  smooth:64
                }
              }
            }
        }
    },
    mounted(){
        this.initSphere();
        new WOW().init();
    },
    methods:{
        initSphere() {
            this.scene.scene = new BlobsScene(this.$refs["target-circle"],this.scene.settings);
        }
    }
}
</script>

<style>
    .controller-more-info-section{
        background: var(--main-color);
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 0;
        overflow: hidden;
    }
    .absolute-circle-controller{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .front-content-controller{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .controller-statistics .more-title-controller{
        font-size: 0.8vmax;
        font-weight: 300;
        text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);
    }
    .controller-procent-text{
        font-size: 6vmax;
        color: var(--theme_2);
        font-weight: bolder;
        text-shadow: 0 0 0.4vmax rgba(0, 0, 0, 0.2);
    }
    .controller-procent-element{
        position: absolute;
        left: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .more-text-controller{
        margin-top: 2.5vmax;
        font-size: 1.7vmax;
        line-height: 0.9em;
        text-transform:none;
        font-family: 'Roboto';
    }
    .controller-statistics-group{
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 50%;
    }
    .controller-statistics{
        --marker-size:0.7vmax;
        --card-size:15vmax;
        width: var(--card-size);
        height: 5vmax;
        display: flex;
        justify-content: center;
        position: relative;
        flex-direction: column;
        color: var(--theme_2);
        font-size: 1.7vmax;
        transition: transform ease 0.1s;
        cursor: pointer;
        z-index: 1;
    }
    .controller-statistics.left-side{
        background: linear-gradient(90deg,var(--theme),transparent);
        text-align: left;
        padding-left:1vmax;
    }
    .controller-statistics.right-side{
        background: linear-gradient(-90deg,var(--theme),transparent);
        margin-left: auto;
        text-align: right;
        padding-right:1vmax;
    }
    .controller-statistics .main-card-statistic{
        text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);
        font-weight: bolder;
    }
    .controller-statistics:hover{
        transform: scale(105%);
    }
    .controller-statistics.left-side::before{
        left: calc(var(--marker-size) * -0.6);
    }
    .controller-statistics.right-side::before{
        left: calc(100% + (var(--marker-size) * -0.6));
    }
    .controller-statistics::before{
        content: '';
        border: 0.2vmax solid var(--theme);
        height: var(--marker-size);
        width: var(--marker-size);
        border-radius: 100%;
        box-shadow: 0 0 0.6vmax 0 rgba(0, 0, 0, 0.4);
        background: var(--theme_2);
        top: calc(var(--marker-size) * -0.6);
        position: absolute;
    }
    .controller-front-content{
        position: relative;
        display: flex;
        flex-direction: column;
        height: var(--size-circle-content);
        width: var(--size-circle-content);
        padding-top:var(--circle-padding);
        gap: 3vmax;
    }
    .controller-text-gradient{
        width: 100%;
        max-width: 90%;
        min-height:10vw;
        height: auto;
        z-index: 2;
        position: relative;
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.9em;
        color: var(--theme_2);
    }
    .controller-text-gradient::before{
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,var(--reverse_2),transparent);
        position: absolute;
        z-index: -1;
        opacity: 0.9;
    }
    .text-content-element{
        width: 100%;
        height: 100%;
        padding-left: var(--page-padding);
        display: flex;
        align-items: center;
    }
    .more-scale-controller{
        font-size: 1.3em;
    }
    .main-section-title{
        font-weight: bolder;
        font-size: 8vmax;
        line-height: 6.8vmax;
        color: var(--theme_2);
        font-family: 'Poppins', sans-serif;
    }
    .left-side-controller-content{
        max-width: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .right-side-controller-content{
        --size-circle-content:46vw;
        --circle-content-padding:10vh;
        --circle-border-size:0.2vmax;
        --circle-padding:calc(var(--circle-content-padding) - var(--circle-border-size));
        width: 50%;
        height: 100%;
        margin-left: auto;
        display: flex;
        position: relative;
    }
    .center-controller-section{
        display: flex;
        gap: 0;
        width: 100%;
        height: 100%;
    }
    .controller-main-text{
        width: 100%;
        box-sizing: content-box;
        padding:18vh 1vmax 1vmax 1vmax;
        height: 50%;
        display: flex;
        align-items: center;
    }
    .controller-circle-content{
        height: var(--size-circle-content);
        width: var(--size-circle-content);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
    }
    .controller-circle-content::before{
        --circle-main-size:calc(var(--size-circle-content) - var(--circle-padding));
        content: '';
        width: var(--circle-main-size);
        height: calc(var(--size-circle-content) - var(--circle-padding));
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        left: calc(50% - (var(--circle-main-size)*0.5));
        top: calc(50% - (var(--circle-main-size)*0.5));
        z-index: 0;
        border: 0.3vmax solid transparent;
        background:radial-gradient(circle at top right,var(--theme_2),transparent 61%) border-box,
        radial-gradient(circle at bottom left,var(--theme_2),transparent 61%) border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
        opacity: 0.9;
        filter: drop-shadow(0.1vmax 0.1vmax 0.1vmax  rgb(0, 0, 0,0.3));
    }
    .back-content-controller{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
    }
    .main-content-controller::before{
        content: '02';
        display: flex;
        background: linear-gradient(180deg, var(--theme_2),transparent 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: -2%;
        left: 0;
        padding: 0.1vmax;
        z-index: -1;
        font-family: 'Poppins';
        text-transform: uppercase;
        font-size: 20vw;
        color: transparent;
        font-weight: bolder;
        position: absolute;
        justify-items: center;
        align-items: center;
        height: 20vw;
    }
    .main-content-controller{
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;
        text-transform: uppercase;
        flex-direction: column;
    }
</style>