<template>
  <section class="controller-main-section">
    <article class="back-layer-controller">
        <article class="controller-back-blobs-layer" ref="blobs-layer">

        </article>
        <article class="controller-front-text-layer">
            <!-- <div class="main-text glass-text">
                <svg class="Svg-class-text-controller"  version="1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <clipPath id="clip">
                        <text x="50%" method="stretch" lengthAdjust="spacingAndGlyphs" y ="50%" dy=".3em" dominant-baseline="middle" text-anchor="middle">{{ mainText }}</text>
                    </clipPath>
                    <text x="50%" method="stretch" lengthAdjust="spacingAndGlyphs" y ="50%" dy=".3em" dominant-baseline="middle" text-anchor="middle" filter="url(#textFilter)">{{ mainText }}</text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1" >
                    <filter id="distortion">
                        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
                        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                    <filter id="textFilter">
                        <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="dark_edge_01" />
                        <feOffset dx="1" dy="1" in="dark_edge_01" result="dark_edge_03"/>
                        <feFlood flood-color="rgba(0,0,0,.5)" result="dark_edge_04" />
    
                        <feComposite in="dark_edge_04" in2="dark_edge_03" operator="in" result="dark_edge" />
    
                        <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="light_edge_01" />
                        <feOffset dx="-1" dy="-1" in="light_edge_01" result="light_edge_03"/>
                        <feFlood flood-color="rgba(255,255,255,.5)" result="light_edge_04" />
                        <feComposite in="light_edge_04" in2="light_edge_03" operator="in" result="light_edge" />
    
                        <feMerge result="edges">
                            <feMergeNode in="dark_edge" />
                            <feMergeNode in="light_edge" />
                        </feMerge>
                        <feComposite in="edges" in2="SourceGraphic" operator="out" result="edges_complete" />
    
                        <feGaussianBlur stdDeviation="5" result="bevel_blur" />
                        <feSpecularLighting result="bevel_lighting" in="bevel_blur" specularConstant="2.4" specularExponent="13" lighting-color="rgba(60,60,60,.9)">
                            <feDistantLight azimuth="25" elevation="40" />
                        </feSpecularLighting>

                        <feComponentTransfer in="colormatrix" result="bevel_lighting">
                            <feFuncR type="table" tableValues="0.03 0.8"/>
                            <feFuncG type="table" tableValues="0.57 1"/>
                            <feFuncB type="table" tableValues="0.49 0.53"/>
                            <feFuncA type="table" tableValues="0 1"/>
                        </feComponentTransfer>

                        <feComposite in="bevel_lighting" in2="SourceGraphic" operator="in" result="bevel_complete" />
    
                        <feMerge result="complete">
                            <feMergeNode in="edges_complete" />
                            <feMergeNode in="bevel_complete" />
                        </feMerge>
                    </filter>
                </svg>
            </div> -->
        </article>
    </article>
    <article class="front-layer-controller">
        <article class="before-text-controller">
            <div class="controller-main-title">
                <h2 class="controller-main-title-texts wow animate__animated animate__slideInLeft" data-wow-delay="0.5s">
                    Go<br/>
                    Learn
                </h2>
            </div>
        </article>
        <aside class="controller-right-side-panel">
            <article class="main-text-controller-article">
                <h3 class="date-controller">2023</h3>
                <h2 class="controller-slogan">Планируем,<br/>Проектируем,<br/>Разрабатываем</h2>
                <p>
                    Цифровые продукты <br/>от идеи до реализации с полным<br/>погружением клиента<br/>в процесс 
                </p>
            </article>
            <article class="bottom-controller-element">
                <button class="report-button wow animate__animated animate__slideInRight" 
                data-wow-delay="0.1s" >
                    <!-- <span class="controller-span-text">
                        Начать обучение
                    </span> -->
                    <i class='bx bxs-right-arrow' ></i>
                </button>
            </article>
        </aside>
    </article>
  </section>
</template>

<script>
import {WOW} from 'wowjs';
import BlobsScene from '@/assets/scripts/3dElements.js';
import randomizeMethod from '@/assets/scripts/randomize.js';
export default {
    props:{

    },
    data(){
        return{
            mainText:"Go learn",
            randomize:{
              randomize:true,
              minBoost:-0.5,
              maxBoost:0.5,
              maxLimit:3,
              minLimit:0.5
            },
            scene:{
              settings:{
                speed: 0.05,
                density: 1.5,
                strength: 0.35,
                frequency: 1.0,
                amplitude: 1.0,
                intensity: 13.0,
                br:{a:0.5,b:0.5,c:0.5},
                c:{a:0.6,b:0.5,c:0.5},
                o:{a:0.8,b:0.11,c:0.11},
                p:{a:0.7,b:0.1,c:0.1},
                op:1,
                position:{
                  x:1.6,
                  y:0,
                  z:0
                },
                mesh:{
                  size:1.9,
                  smooth:64
                }
              }
            }
        }
    },
    mounted() {
      new WOW().init();
      this.initSphere();
    },
    methods:{
      initSphere() {
        this.randomizeSceneColor();
          this.scene.scene = new BlobsScene(this.$refs["blobs-layer"],this.scene.settings);
      },
      randomizeSceneColor(){
        this.scene.settings.br = {
          a:randomizeMethod(this.scene.settings.br.a,this.randomize),
          b:randomizeMethod(this.scene.settings.br.b,this.randomize),
          c:randomizeMethod(this.scene.settings.br.c,this.randomize),
        }
      },
    }
}
</script>

<style scoped>
    .bottom-controller-element{
        width: 100%;
        height: var(--report-button-size);
        display: flex;
        justify-content: flex-end;
        padding: 0 4vmax;
        margin-top: auto;
        position: relative;
    }
    .controller-span-text{
        position: absolute;
        width: 17vmax;

    }
    .controller-button-text{
        color: var(--theme_2);
        font-weight: bolder;
        padding-right: 0.1vmax;
    }
    .controller-slogan{
        font-size: 3.5vmax;
        line-height: 1em;
        letter-spacing: 0.1vmax;
        color: var(--theme_2);
        font-family: 'Roboto';
        font-weight: bolder;
    }
    .controller-main-title-texts{
        font-size: 15vmax;
        line-height: 0.8em;
        font-weight: bolder;
        background-image: linear-gradient(0deg,rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.6));
        opacity: 0.5;
        text-shadow: 0 0vmax 0.6vmax rgba(0, 0, 0, 0.05);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .controller-main-title{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .date-controller{
        font-weight: 500;
        font-size: 1.6vmax;
    }
    .report-button{
        width: var(--report-button-size);
        height: var(--report-button-size);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        color: var(--theme_2);
        font-size: 2vmax;
    }
    .report-button:hover{

    }
    .report-button::before{
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: 0.2vmax solid var(--theme_2);
        position: absolute;
        display: flex;
        justify-items: center;
        align-items: center;
        mask-composite:exclude;
        opacity: 0.8;
    }
    .main-text-controller-article{
        width: 100%;
        padding: 0 4vmax;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5vmax;
        color: var(--theme_2);
        height: calc(95% - var(--report-button-size));
    }
    .glass-text{
        font-size: 10vmax;
        user-select: none;
        text-transform: uppercase;
        font-weight: bolder;
        letter-spacing: 0.1vmax;
    }
    .Svg-class-text-controller{
        width: auto;
        height: 100vh;
    }
    .controller-main-section{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        --report-button-size:7vmax;
    }
    .controller-main-section::before{
        content: '';
        width: 100%;
        height: 100%;
        /* background: linear-gradient(90deg,var(--theme_3),transparent); */
        position: absolute;
        opacity: 0.05;
        z-index: -1;
    }
    .controller-front-text-layer{
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        pointer-events: none;

    }
    .back-layer-controller{
        overflow: hidden;
        position: relative;
        overflow: hidden;
    }
    .controller-right-side-panel{
        overflow: hidden;
        width: 40%;
        min-width: 40vmax;
        background: transparent;
        box-shadow:  inset 1vmax 0 5vmax 0.1vmax rgba(0, 0, 0, 0.2),
        inset 1vmax 0 1vmax 0.1vmax rgba(0, 0, 0, 0.4);
        margin-left: auto;
        height: 100%;
        position: relative;
        background: rgba(0, 0, 0, 0.2);
        /* backdrop-filter: blur(1vmax); */
    }
    .controller-right-side-panel::before{
        content: '';
        --height:90%;
        width: 30%;
        height: var(--height);
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        position: absolute;
        top: calc(50% - (var(--height) /2));
        left: -20%;
        filter: blur(4vmax);
        border-radius: 2vmax;
    }
    .front-layer-controller{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

    }
</style>